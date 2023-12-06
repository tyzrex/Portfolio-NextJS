"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollText() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [200, -800]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["rgba(255, 237, 213, 0.2)", "rgba(255, 237, 213, 0.8)"]
  );

  return (
    <>
      <motion.p
        className="text-5xl w-fit
    bg-clip-text text-transparent bg-no-repeat
        xl:text-[80px] font-bold transition-all ease-out duration-500 whitespace-nowrap"
        //@ts-ignore
        style={{ x, backgroundColor }}
      >
        I CENTER DIVS I CENTER DIVS I CENTER DIVS I CENTER DIVS I CENTER DIVS
      </motion.p>
    </>
  );
}
