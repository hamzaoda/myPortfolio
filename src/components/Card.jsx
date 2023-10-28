/* eslint-disable react/prop-types */
import TextTruncate from "react-text-truncate";
import { BsArrowUpRightSquare } from "react-icons/bs";

function Card({ image, alt, name, description, skills, link, github }) {
    return (
        <div className="flex flex-col w-[350px] h-[650px] card-shadow ">
            <div className="relative">
                <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="hover-overlay absolute m-auto bottom-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300">
                    <p className="text-white absolute text-center sm:mt-8 mt-2 sm:text-xl text-sm bottom-0 top-0 right-0 left-0">
                        {name}
                    </p>
                    <BsArrowUpRightSquare
                        className="text-white absolute m-auto bottom-0 top-0 right-0 left-0"
                        size="3rem"
                    />
                </div>
                    <img className="h-[175px] w-[100%]" src={image} alt={alt} />
                </a>
            </div>
            <div className=" flex flex-col gap-8 my-8 px-[50px]">
                <h1 className="text-cyan-500 font-semibold text-3xl text-center">
                    <TextTruncate text={name} line={1} truncateText="…" />
                </h1>
                <TextTruncate
                    className="card-description font-mono"
                    line={4}
                    element="p"
                    truncateText="…"
                    text={description}
                />
            </div>
            <div className="flex flex-col justify-end items-center mt-auto mb-6">
                <h4 className="text-cyan-500 font-semibold text-xl text-center">
                    Skills:
                </h4>
                <h6 className="px-4 text-[1.125rem] text-cyan-500 font-semibold  text-center my-4">
                    <TextTruncate text={skills} truncateText="…" line={2} />
                </h6>
                <div className="w-[100%] flex flex-row justify-around">
                    {/* Link View */}
                    <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
                        <button>Preview</button>
                    </a>
                    {/* Git Hub Repo */}
                    <a href={github} target="_blank" rel="noopener noreferrer" className="card-button">
                        <button>Git Hub</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
