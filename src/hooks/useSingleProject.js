import { useEffect, useState } from "react";
import { getSingleProject } from "../contentful";

export default function useSingleProject(slug) {
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const capitalised = slug.split("-").map((word) => word[0].toUpperCase() + word.slice(1));
    const name = capitalised.join(" ");

    getSingleProject(name)
      .then((res) => {
        const images = res[0].fields.images.filter((image) => image.fields.title.includes("mobile") || image.fields.title.includes("desktop-lg"));
        const sanitisedImages = images.map((image) => image.fields);

        const project = { ...res[0].fields, images: sanitisedImages };

        setProject(project);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [slug]);

  return [project, isLoading];
}
