"use client";

import { motion } from "framer-motion";

import ScrollText from "./_small_components/Scroll-Text";
import Globe from "@/components/globe";

export default function Hero() {
  return (
    <>
      <section className="max-w-layout mx-auto  py-12 xl:pb-32">
        <motion.div className="flex flex-col xl:flex-row md:items-center">
          <motion.div className="flex-1">
            <h1 className="text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-left: md:text-center leading-[1.1] xl:text-left font-bold text-orange-100">
              Sulav Baral
            </h1>

            <h2 className="text-[20px] mt-5 sm:text-[30px] lg:text-[40px] text-left md:text-center xl:text-left font-bold text-orange-100">
              FRONTEND DEVELOPER
            </h2>

            <div className="flex-1 flex mt-5">
              <motion.p
                className="text-orange-100 text-left text-lg sm:text-xl lg:text-2xl 
          md:max-w-[600px] md:text-center xl:text-left xl:max-w-full mx-auto
          "
              >
                Hi I&apos;m a Frontend Developer based in Nepal. I have serious
                passion for UI effects, animations and creating intuitive,
                dynamic user experiences. Let&apos;s make something special.
              </motion.p>
            </div>
          </motion.div>

          {/* <div className="flex flex-col gap-5 mt-10 xl:mt-0 xl:w-[50%]">
            <h3 className="text text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              RESUME<span>DOWNLOAD</span>
            </h3>
            <h3 className="text text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              SOCIALS<span>LET&apos; CONNECT</span>
            </h3>
          </div> */}
        </motion.div>
      </section>
      <ScrollText />
    </>
  );
}
