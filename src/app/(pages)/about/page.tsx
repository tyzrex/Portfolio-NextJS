"use client";
import { motion } from "framer-motion";

import SectionHeader from "@/app/components/_small_components/Section-Header";

export default function About() {
  return (
    <>
      <section className="mx-auto w-full max-w-layout  py-24">
        <motion.div>
          <SectionHeader text="About" />
        </motion.div>
      </section>
    </>
  );
}
