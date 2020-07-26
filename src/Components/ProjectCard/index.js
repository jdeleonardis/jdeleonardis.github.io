import React from "react";
import "../../Styles/style.css";
import { RowOrCol } from "../Grid";

function ProjectCard(props) {
  return (
        <div>
          {props.projects.map(project => (
            <div className="card m-3" key={project.id}>
                <RowOrCol value="row no-gutters align-items-center">
                    <RowOrCol value="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{project.appName}</h3>
                            <p className="card-text">{project.description}</p>
                            <h4 className="card-title">Technologies used:</h4>
                            <p className="card-text technologies">{project.techUsed}</p>
                            <a href={project.repoAddress} target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                            <a href={project.deployedAddress} target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                        </div>
                    </RowOrCol>
                    <RowOrCol value="col-md-5">
                        <a href={project.deployedAddress} target="_blank" rel="noopener noreferrer"><img src={require(`../../Images/${project.imgLocation}`)} className="card-img border shadow" alt={project.title}></img></a>
                    </RowOrCol>        
                </RowOrCol>
            </div>
          ))}
    </div>

  );
}

export default ProjectCard;