"use client";

import { motion } from "framer-motion";

import ScrollText from "./_small_components/Scroll-Text";

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-10 sm:px-6 lg:px-8 py-12 lg:py-24 xl:py-32">
        <motion.div
          key={"container"}
          variants={container}
          className="flex flex-col xl:flex-row md:items-center"
        >
          <motion.div
            key={"name"}
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex-1"
          >
            <h1 className="text-[100px] lg:text-[120px] text-left: md:text-center leading-[1.1] lg:text-left font-bold text-orange-100">
              Sulav Baral
            </h1>

            <h2 className="text-[30px] mt-10 sm:text-[40px] lg:text-[50px] text-left md:text-center lg:text-left font-bold text-orange-100">
              FRONTEND DEVELOPER
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5 mt-10 xl:mt-0 xl:w-[50%]">
            <h3 className="text text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              RESUME<span>DOWNLOAD</span>
            </h3>
            <h3 className="text text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              SOCIALS<span>LET&apos; CONNECT</span>
            </h3>
          </div>
        </motion.div>
        <div className="flex-1 flex mt-20">
          <motion.p
            variants={item}
            className="text-orange-100 text-left text-3xl 
          md:max-w-[600px] md:text-center xl:text-left xl:max-w-full mx-auto
          "
          >
            Hi I&apos;m a Frontend Developer based in Nepal. I have serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences. Let&apos;s make something special.
          </motion.p>
        </div>
      </section>
      <ScrollText />
    </>
  );
}
