"use client";
import { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

import SectionHeader from "./_small_components/Section-Header";
import { BentoCard } from "./_small_components/Bento-Component";
import Globe from "@/components/globe";

const about = {
  name: "",
  description: (
    <>
      <div className="flex flex-col gap-5 items-start justify-between h-full">
        <div>
          <h1 className="text-3xl text-blue-100 font-bold">{"< SB />"}</h1>
          <p className="text-lg text-orange-100">
            Sulav Baral&apos;s Portfolio
          </p>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div>
            <h1 className="text-2xl font-bold text-orange-100">Sulav Baral</h1>
            <p className="text-lg text-orange-100">Frontend Developer</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-orange-100">
              sulavbaral58&#64;gmail.com
            </p>
            <p className="text-sm text-orange-100">+977 9861841559</p>
            <p className="text-sm text-orange-100">123, Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </>
  ),
  href: "/",
  cta: "Learn more",
  background: (
    <Globe className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
  ),
};

export default function About() {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <section className="">
        <div className="mx-auto w-full max-w-layout  py-24">
          <Link href={"/about"}>
            <div className="cursor-pointer">
              <SectionHeader text="About" />
            </div>
          </Link>

          <div className="mt-20 grid gap-6 grid-cols-4 lg:grid-cols-6 items-center ">
            <BentoCard
              {...about}
              className="card-background col-span-4 lg:col-span-3 xl:col-span-4 min-h-[300px]"
            />

            <div className="flex flex-col items-center justify-start col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-2 gap-2 card-background h-full rounded-2xl">
              <div className="xl:px-10 px-5 my-10">
                <h1 className="text-2xl font-bold text-green-100">
                  INTRODUCTION
                </h1>
                <p className="text-xl mt-5 text-orange-100/80 sm:text-xl">
                  I&apos;m a 3rd year Computer Science student from Tribhuvan
                  University, unravelling the art of frontend wizardry. Imagine
                  crafting virtual experiences that sparkle and dance—yep,
                  that&apos;s my jam!
                </p>
              </div>
            </div>

            <div className="flex flex-col col-span-4 md:col-span-2 gap-2 card-background h-full rounded-2xl">
              <div className="px-5 xl:px-10 py-10">
                <h1 className="text-2xl font-bold text-green-100">
                  EXPERIENCE
                </h1>
                <div className="mt-10 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2023 June - Present
                      </h2>
                      <h1 className="text-2xl text-orange-100">
                        Internship / Junior Frontend Developer
                      </h1>
                      <p className="text-lg text-orange-100/60">eParamarsha</p>
                    </div>

                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2023 August - Present
                      </h2>
                      <h1 className="text-2xl text-orange-100">
                        Frontend Developer
                      </h1>
                      <p className="text-lg text-orange-100/60">
                        Fatafat Sewa Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-4 gap-2 card-background h-full rounded-2xl">
              <div className="px-5 xl:px-10 py-10">
                <h1 className="text-2xl font-bold text-blue-100">EDUCATION</h1>
                <div className="mt-10 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2021 June - Present
                      </h2>
                      <h1 className="text-2xl text-orange-100">
                        Bachelor&apos;s in Computer Science
                      </h1>
                      <p className="text-lg text-orange-100/60">
                        Prime College, Kathmandu
                      </p>
                    </div>

                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2019 - 2021
                      </h2>
                      <h1 className="text-2xl text-orange-100">High School</h1>
                      <p className="text-lg text-orange-100/60">
                        Trinity International College, Kathmandu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
