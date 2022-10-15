import { useParams } from "react-router-dom";
import useSingleProject from "../hooks/useSingleProject";

const Project = () => {
  const params = useParams();

  const [project, isLoading, isError] = useSingleProject(params.project);
  console.log(project);

  if (isError) return <p>Sorry there was an error fetching that project.</p>;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </>
      )}
    </div>
  );
};

export default Project;
