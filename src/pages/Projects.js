import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/projects.css";

function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, index) => {
                    return (
                        <ProjectItem
                            name={project.name}
                            image={project.image}
                            id={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
