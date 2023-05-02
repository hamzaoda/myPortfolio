import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import myImage from "../assets/social_media.png";
import "../styles/home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <div className="backgroundd">
                    <h2>Hi, My Name is Hamaza </h2>
                    <div className="prompt">
                        <p>
                            A Web developer with 2+ years experience in building
                            websites and managing databases,I have a bachelor in
                            Informatics Engineering with specialty in Artificial
                            Intelligence.
                        </p>
                        <a href="https://www.linkedin.com/in/hamza-ioudeh-04a9a1201/">
                            <LinkedInIcon />
                        </a>
                        <a href="mailto:hamzaalmidany@gmail.com">
                            <EmailIcon />
                        </a>
                        <a href="https://github.com/hamzaoda">
                            <GithubIcon />
                        </a>
                    </div>
                    <div class="container"></div>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li key="" className="item">
                        <h3>Front-end</h3>
                        <span>
                            ReactJS, Angular, Redux, HTML, CSS, BootStrap NPM,
                            Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS,
                            StyledComponents
                        </span>
                    </li>
                    <li key="" className="item">
                        <h3>Back-end</h3>
                        <span>
                            NodeJS,.NET, ExpressJS, GraphQL, MySQL, MongoDB, AWS
                            S3, MS SQL
                        </span>
                    </li>
                    <li key="" className="item">
                        <h3>Langauges</h3>
                        <span>
                            JavaScript, Python, Java, PHP,C#, C, C++,
                            TypeScript.
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
