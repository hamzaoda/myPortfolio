import Card from "./Card";
import projects from "../utils/data";

function Projects() {
    return (
        <div className="m-auto w-[75%] relative" id="projects">
            {/* title */}
            <div className="w-full text-center flex md:justify-start justify-center">
                <h1 className="gradient-text text-[32px] lg:text-[56px] md:text-[40px]">
                    Projects
                </h1>
            </div>
            {/* Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-12 place-items-center ">
                {projects.map((project, index) => (
                    <div key={index} className="">
                        <Card
                            image={project.image}
                            alt={project.alt}
                            name={project.name}
                            description={project.description}
                            skills={project.skills}
                            link={project.link}
                            github={project.github}
                        />
                    </div>
                ))}
            </div>
            <div className="section_div flex mt-20"></div>
        </div>
    );
}

export default Projects;
