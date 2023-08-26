import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import { BsMouse, BsArrowDownShort } from "react-icons/bs";
export default function Hero() {
  return (
    <section className="max-w-layout lg:h-[90vh]">
      <div className="container flex justify-between items-center py-16 md:pt-[10rem] mx-auto md:mx-0">
        <div className="hidden md:flex flex-col gap-8 w-[15%]">
          <FaInstagram className="text-2xl text-white hover:text-accent color-transition cursor-pointer" />
          <FiGithub className="text-2xl text-white hover:text-accent color-transition cursor-pointer" />
          <FaLinkedinIn className="text-2xl text-white hover:text-accent color-transition cursor-pointer" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <div className="flex flex-col items-center md:items-start w-full gap-5 text-center md:text-left ">
            <h1 className="font-big font-bold text-text-light">
              Hi, I{"'"}m <span className="text-accent">Sulav</span>
            </h1>
            <div className="text-3xl text-text-light flex-center gap-4 w-full">
              <span className="w-[10%]">
                <span className="bg-accent h-[2px] w-full hidden md:block"></span>
              </span>{" "}
              <h2 className="break-keep w-full font-h3">Frontend Developer</h2>
            </div>

            <h3 className="text-gray-400 max-w-[600px] text-lg">
              I{"'"}m a Frontend Developer based in Nepal. I have serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </h3>

            <button
              className="w-fit px-6 mt-5 z-0
             py-3 rounded-lg border border-gray-600 text-accent bg-[#1a1a1a] flex-center group
            "
            >
              <span className="mr-2 font-bold">Say Hello</span>
              <span>
                <GoPaperAirplane
                  className="w-5 h-5 rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0
                "
                />
              </span>
            </button>
          </div>

          <div
            className="
          "
          >
            <div
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full bg-white profile__image 
              border-[10px] border-accent flex-center
              "
            ></div>
          </div>

          <div className=" flex md:hidden gap-8 ">
            <FaInstagram className="text-2xl text-text-light" />
            <FiGithub className="text-2xl text-text-light" />
            <FaLinkedinIn className="text-2xl text-text-light" />
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="flex-center gap-2">
          <BsMouse className="text-4xl text-accent" />
          <h1 className="text-2xl font-bold text-text-light">Scroll Down</h1>
          <BsArrowDownShort
            className="text-4xl text-accent
            animate-bounce 
          "
          />
        </div>
      </div>
    </section>
  );
}
