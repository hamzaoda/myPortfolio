import pic from '../assets/images/social_media.png'

function Hero() {
    return (
        <div className="md:flex min-h-full w-[100%] mt-24">
            {/* Intro */}
            <div className="flex flex-col w-[75%] m-auto justify-center gap-8 h-[100%] md:text-left text-center">
                <div className="md:w-[70%] w-[100%] flex flex-col md:flex-row items-center mt-4">
                    <div>
                        <h1 className="gradient-text min-w-full text-[32px] lg:text-[56px] md:text-[40px] ">
                            Welcome to <br />
                            My Personal Portfolio
                        </h1>
                        <p className="text-p">
                            {" "}
                            Hello, I am Hamza Ioudeh and I am a web Developer{" "}
                            <br />I have 2+ Exp in Web Development with MERN
                            Technolgies.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex items-center justify-center lg:ml-24 relative">
                        <div className=" lg:h-[350px] lg:w-[350px] h-[250px] w-[250px]">
                            <img className='container' src={pic} alt="Social Media Image" />
                        </div>
                        <div className="-z-10 ">
                            {/* gradient start */}
                            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient left-12" />
                            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 left-12" />
                            <div className="absolute z-[0] w-[50%] h-[50%] right-40 bottom-20 blue__gradient left-12" />
                            {/* gradient end */}
                        </div>
                    </div>
                </div>
                <a href="#about-me">
                    <button className="md:w-[250px] button-home">
                        Learn More{" "}
                    </button>
                </a>
                <div className="section_div flex"></div>
            </div>
        </div>
    );
}

export default Hero;
