import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <div className="m-auto w-[75%]">
            <div className="border border-white "></div>
            <div className="text-white h-[300px] flex md:flex-row flex-col py-12 justify-between items-center gap-12">
                <div className="flex flex-col text-xl md:items-baseline items-center">
                    <div className="flex h-12 items-center">
                        <BiPhoneCall size="1.75rem" />
                        <h4 className="ml-4 ">Call:</h4>
                    </div>
                    <p className="flex ">
                        <a href="tel:+971569462902"> +971569462902</a>
                    </p>
                </div>
                <div className="flex flex-col text-xl md:items-baseline items-center">
                    <div className="flex h-12 items-center">
                        <AiOutlineMail size="1.75rem" />
                        <h4 className="ml-4 ">Email:</h4>
                    </div>
                    <p className="flex ">
                        <a href="mailto:hamzaalmidany@gmail.com">
                            hamzaalmidany@gmail.com
                        </a>
                    </p>
                </div>
                <div className="pb-12">
                    <div className="lg:w-[400px] flex text-white items-center justify-around gap-4  ">
                        <a href="https://hamzaoda.github.io/myPortfolio/">
                            <AiFillGithub className=" md:text-[36px] text-[28px]" />
                        </a>
                        <a href="mail-to:hamzaalmidany@gmail.com">
                            <AiOutlineMail className=" md:text-[36px] text-[28px]" />
                        </a>
                        <a href="">
                            <AiFillLinkedin className=" md:text-[36px]  text-[28px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
