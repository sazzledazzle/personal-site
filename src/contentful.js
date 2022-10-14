import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const getProjects = () =>
  client
    .getEntries({
      content_type: "portfolioItems",
      order: "sys.createdAt",
    })
    .then((res) => res.items)
    .catch((err) => console.log(error.message));

const getSingleProject = (name) =>
  client
    .getEntries({
      "fields.name": name,
      content_type: "portfolioItems",
    })
    .then((res) => res.items)
    .catch((err) => console.log(err.message));

export { getProjects, getSingleProject };
