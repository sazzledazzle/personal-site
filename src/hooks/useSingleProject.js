import { useEffect, useState } from "react";
import { getSingleProject } from "../contentful";

export default function useSingleProject(slug) {
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

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
      .catch((err) => {
        console.log(`Error: ${err.message}`);
        setError(true);
      });
  }, [slug]);

  return [project, isLoading, isError];
}
