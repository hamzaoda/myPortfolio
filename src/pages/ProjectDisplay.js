import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/projectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <a href={project.link}><img src={project.image} alt={project.name + "website"} /></a>
            <p>Skills: {project.skills}</p>
            <a href={project.github}><GithubIcon /></a>
            
        </div>
    );
}

export default ProjectDisplay;
