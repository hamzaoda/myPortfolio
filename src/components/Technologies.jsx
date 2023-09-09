import { DiFirebase, DiReact, DiCss3, DiNodejsSmall } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiExpressvpn } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsDot, BsBootstrap } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

function technologies() {
    return (
        <div className="m-auto w-[75%] py-8 relative" id="tech">
        <div className="opacity-50">
            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
            </div>
            {/* title */}
            <div className="w-full text-center flex md:justify-start justify-center">
                <h1 className="gradient-text text-[32px] lg:text-[56px] md:text-[40px]">
                    Technologies
                </h1>
                <br />
            </div>
            <p className="text-p mb-0" style={{ maxWidth: "900px" }}>
                I{"'"}ve worked with a range a technologies in the web
                development world. From Back-end To Front-end and Design
            </p>
            <div className="flex lg:flex-row flex-col">
                {/* skills */}
                <div className="lg:w-1/2 w-full">
                    {/* front end */}
                    <h6 className="list-title text-center py-4">Front End:</h6>
                    <div className="flex sm:flex-row flex-col sm:gap-12 gap-0 justify-center">
                        {/* first list */}
                        <ul className="list-p sm:w-1/2 w-full text-center justify-center">
                            <li className="ml-4 flex items-center h-12 md:justify-normal  justify-center">
                                <BsDot size="1.5rem" />
                                React JS
                                <DiReact size="2.5rem" />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                Next JS
                                <SiNextdotjs size="2.25rem" className="ml-4" />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                HTML 5
                                <AiOutlineHtml5
                                    size="2.5rem"
                                    className="ml-4"
                                />
                            </li>
                        </ul>
                        {/* second list */}
                        <ul className="list-p sm:w-1/2 w-full">
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                Tailwaind
                                <SiTailwindcss size="2.5rem" className="ml-4" />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal ">
                                <BsDot size="1.5rem" />
                                Bootstrap
                                <BsBootstrap size="2.25rem" className="ml-4 " />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                CSS 3
                                <DiCss3 size="2.5rem" className="ml-4" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    {/* Back end */}
                    <h6 className="list-title text-center py-4">Back End:</h6>
                    <div className="flex sm:flex-row flex-col sm:gap-12 gap-0 justify-center">
                        {/* first list */}
                        <ul className="list-p sm:w-1/2 w-full">
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                Node JS
                                <DiNodejsSmall size="2.5rem" />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                Mongo DB
                                <BiLogoMongodb size="2.5rem" className="ml-4" />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                Express JS
                                <SiExpressvpn size="2.15rem" className="ml-4" />
                            </li>
                        </ul>
                        {/* second list */}
                        <ul className="list-p sm:w-1/2 w-full">
                            <li className="ml-4 flex items-center  justify-center md:justify-normal">
                                <BsDot size="1.5rem" />
                                SQL
                                <DiFirebase size="2.5rem" className="ml-4" />
                            </li>
                            <li className="ml-4 flex items-center  justify-center md:justify-normal ">
                                <BsDot size="1.5rem" />
                                RESTful API
                                <TbApi size="2.5rem" className="ml-4 " />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section_div flex mt-20"></div>
        </div>
    );
}

export default technologies;
