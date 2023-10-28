import aiuImage from "../assets/images/aiu.jpg";
import { BsArrowUpRightSquare } from "react-icons/bs";

function AboutMe() {
    return (
        <div className="m-auto w-[75%] " id="aboutMe">
            <h1 className="gradient-text mx-auto lg:mx-0 text-[32px] lg:text-[56px] md:text-[40px] mb-8">
                About Me:
            </h1>
            <div className="flex lg:flex-row items-center flex-col">
            <div className="flex lg:mb-0 mb-8">
                    <div className="flex justify-end md:mr-10 pt-8 cursor-pointer relative mx-auto">
                        <a
                            href="https://www.aiu.edu.sy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></a>
                        <img src={aiuImage} alt="aiu" className="mx-auto" />
                        <div className="hover-overlay absolute m-auto bottom-0 top-8 left-0 w-full h-[93%] bg-black opacity-0 hover:opacity-50 transition-opacity duration-300">
                            <p className="text-white absolute text-center sm:mt-14 mt-6 sm:text-xl text-sm bottom-0 top-0 right-0 left-0">
                                Arab International University
                            </p>
                            <BsArrowUpRightSquare
                                className="text-white absolute m-auto bottom-0 top-0 right-0 left-0"
                                size="3rem"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[70%] w-[100%]  text-center lg:text-left">
                    <p className="text-[1.025rem] text-white">
                        Hello 👋, My name is Hamza Ioudeh, I have 2+ years
                        Experience in Web Development and 1+ year in Data
                        analysis and Design 😎, I have a bachelor Degree in
                        Informatics Engineering with major in Artificial
                        Inelegance.
                        <br />
                        I Have 2+ years Experience using Node js, and MongoDB
                        with Express js, then i turned to full stack and start
                        using the MERN (Mongo, Express, React, Node)
                        Technologies 💪.
                        <br />
                        All my experience is in E-commerce web Applications, I
                        did a free lance projects in Machine learning and
                        Natural language processing.
                        <br />I Love reading 📕 and I read around 2 books a
                        month, and love learning new thing and new skills, I
                        have 80 WPM typing speed ⌨, I am learning German and
                        French simultaneously, but I am focusing more on german
                        and I reached A1 and I will still learning until Allah
                        took my soul, Thank you for reading 🙏.
                    </p>
                </div>
            </div>
            <div className="section_div flex mt-20"></div>
        </div>
    );
}

export default AboutMe;
