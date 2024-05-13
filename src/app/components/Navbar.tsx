"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import MobileMenu from "./Mobile-Menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contacts", label: "Contacts" },
];

export default function Navbar() {
  return (
    <>
      <header>
        <motion.div className="mx-auto max-w-layout ">
          <div className="flex h-24 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-orange-100" href="/">
                <h1 className="text-3xl font-bold">{"< SB />"}</h1>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-10 text-md ">
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <Link
                        className="text-orange-100 hover:text-orange-300 color-transition nav-links"
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-zinc-800 px-5 py-2.5 text-sm font-medium text-orange-100"
                    href="/"
                  >
                    Let&apos;s talk
                  </Link>
                </div>
              </div>

              <MobileMenu />
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
