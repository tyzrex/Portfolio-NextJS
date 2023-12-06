"use client";
import { motion } from "framer-motion";

import SectionHeader from "@/app/components/_small_components/Section-Header";

export default function About() {
  return (
    <>
      <section className="mx-auto w-full max-w-screen-2xl px-10 sm:px-6 lg:px-8 py-24">
        <motion.div>
          <SectionHeader text="About" />
        </motion.div>
      </section>
    </>
  );
}
