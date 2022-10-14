import { useEffect, useState } from "react";
import { getProjects } from "../contentful";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => {
        const sanitisedResponse = res.map((item) => {
          const images = item.fields.images.filter((image) => image.fields.title.includes("desktop"));
          const sanitisedImages = images.map((image) => image.fields);

          return {
            id: item.sys.id,
            name: item.fields.name,
            summary: item.fields.summary,
            tags: item.fields.tags,
            images: sanitisedImages,
            websiteLink: item.fields.websiteLink,
          };
        });
        setProjects(sanitisedResponse);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return [projects, isLoading];
}
