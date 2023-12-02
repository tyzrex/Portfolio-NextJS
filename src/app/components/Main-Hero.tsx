"use client";
import { MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <>
      {" "}
      <section className="max-w-screen-2xl mx-auto px-10 sm:px-6 lg:px-8 py-12 lg:py-24 xl:py-32">
        <div className="flex flex-col xl:flex-row md:items-center">
          <div className="flex-1">
            <h1 className="text-[100px] lg:text-[120px] text-left: md:text-center leading-[1.1] lg:text-left font-bold text-orange-100">
              Sulav Baral
            </h1>

            <h2 className="text-[30px] mt-10 sm:text-[40px] lg:text-[50px] text-left md:text-center lg:text-left font-bold text-orange-100">
              FRONTEND DEVELOPER
            </h2>
          </div>

          <div className="flex flex-col gap-5 mt-10 xl:mt-0 xl:w-[50%]">
            <h1 className="text text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              RESUME<span>DOWNLOAD</span>
            </h1>
            <h1 className="text text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              SOCIALS<span>LET&apos; CONNECT</span>
            </h1>
          </div>
        </div>
        <div className="flex-1 flex mt-20">
          <p
            className="text-orange-100 text-left text-3xl 
          md:max-w-[600px] md:text-center xl:text-left xl:max-w-full mx-auto
          "
          >
            Hi I&apos;m a Frontend Developer based in Nepal. I have serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences. Let&apos;s make something special.
          </p>
        </div>
        <div className="flex mx-auto mt-20 flex-col md:flex-row justify-between md:items-center">
          <div className="h-full ">
            <h1 className="text text-[40px] md:text-[40px]">
              SAY HELLO
              <span>CONTACT</span>
            </h1>
          </div>
          {/* a component where it denotes to go down */}
          <div className="hidden md:flex items-center gap-2">
            <MoveDown
              size={30}
              className="animate-bounce duration-1000 text-orange-100/60"
            />
          </div>
        </div>
      </section>
    </>
  );
}
