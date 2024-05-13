import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-orange-100">
        <div className="mx-auto w-full max-w-layout   py-16 md:py-24 lg:py-32">
          <div className="flex justify-between items-end">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex flex-col gap-5 mb-10 md:mb-0">
                <Link href="/">
                  <h1 className="text-3xl font-bold">{"< SB />"}</h1>
                </Link>
                <p className="text-3xl">Sulav Baral</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <Link href="#" className="mb-8 inline-block max-w-full"></Link>

              <div>
                <div className="mb-12 grid w-full grid-flow-col grid-cols-4 gap-8">
                  <Link href="#">
                    <Facebook size={32} />
                  </Link>
                  <Link href="#">
                    <Instagram size={32} />
                  </Link>
                  <Link href="#">
                    <Linkedin size={32} />
                  </Link>
                  <Link href="#">
                    <Twitter size={32} />
                  </Link>
                  <Link href="#">
                    <Mail size={32} />
                  </Link>
                </div>
              </div>
              <p className="max-[479px]:text-sm text-3xl">
                Sulav Baral © Copyright 2023. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
