import React from "react";
import "../../Styles/style.css";
import ProjectCard from "../ProjectCard";
import Data from "../../Utils/projectdata.json";

function Projects() {
  const data = Data.results;

  return (
    <div>
        <ProjectCard projects={data} />
    </div>  
  );
}

export default Projects;