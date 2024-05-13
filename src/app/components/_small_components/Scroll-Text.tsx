"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollText() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -800]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["rgba(255, 237, 213, 0.2)", "rgba(255, 237, 213, 0.8)"]
  );

  return (
    <>
      <motion.p
        className="text-5xl w-fit uppercase
    bg-clip-text text-transparent bg-no-repeat
        xl:text-[80px] font-bold transition-all ease-out duration-500 whitespace-nowrap"
        //@ts-ignore
        style={{ x, backgroundColor }}
      >
        I doth center divs with the grace of Apollo's chariot, weaving through
        the celestial canvas of code, where each pixel doth find its rightful
        place, as stars in the midnight sky."
      </motion.p>
    </>
  );
}
