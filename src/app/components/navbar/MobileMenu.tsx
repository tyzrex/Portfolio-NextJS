"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// import Logo from "@/../public/logo1.webp";
import Image from "next/image";
import classNames from "classnames";
import { RiMenu4Fill } from "react-icons/ri";
import { Navlinks } from "./Navbardata";
import { TbBrandTorchain } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileMenu(props: { className?: string }) {
  const [nav, setNav] = useState<Boolean>(false);

  const getNavItemClasses = (): string => {
    return classNames(
      "flex items-center cursor-pointer w-full overflow-hidden whitespace-nowrap"
    );
  };

  const handleNav = (): void => {
    setNav(true);
  };

  const closeNav = (): void => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  return (
    <header className={`${props.className} + navbar`}>
      <div className="w-full items py-5 max-w-layout mx-auto border-b border-b-gray-600 ">
        <div className="flex justify-between items-center w-full">
          <div className="logo flex justify-center items-center gap-4">
            <Link href="/">
              <h1 className="text-2xl font-bold flex-center gap-2">
                <TbBrandTorchain className="text-3xl text-accent" />
                <span className="text-text-light">
                  Sulav
                  <span className=""> Baral</span>
                </span>
              </h1>
            </Link>
          </div>

          <div>
            <button className="navbar-open" onClick={handleNav}>
              <RiMenu4Fill className="w-8 h-8 text-accent" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-full h-full bg-main z-50 overflow-y-auto transition-all duration-700 ease-in-out"
            : "fixed top-0 left-0 w-full h-full bg-main z-50 overflow-y-auto transition-all duration-700 ease-in-out transform -translate-x-[100%]"
        }
      >
        <nav className="max-w-[90%] flex flex-col h-full  mx-auto w-full  ">
          <div className="flex-center py-6 border-b border-b-gray-600">
            <div className="mr-auto leading-none">
              <Link href="/">
                <h1 className="text-2xl font-bold flex-center gap-2">
                  <TbBrandTorchain className="text-3xl text-accent" />
                  <span className="text-text-light">
                    Sulav
                    <span className=""> Baral</span>
                  </span>
                </h1>
              </Link>
            </div>
            <button className="navbar-close text-accent" onClick={closeNav}>
              <AiOutlineClose className="w-8 h-8 " />
            </button>
          </div>

          <div>
            <div className="flex flex-col items-center mt-2">
              {Navlinks?.map((item: any, index: number) => {
                const classes = getNavItemClasses();
                return (
                  <div className={classes} key={index} onClick={closeNav}>
                    <Link href={item.href}>
                      <div className="flex py-2 px-2 items-center gap-3 w-full h-full">
                        <div
                          className={` p-2 rounded-full}`}
                          style={{ width: "2.5rem" }}
                        >
                          {item.icon}
                        </div>
                        <span
                          className={classNames(
                            "text-md font-medium text-text-light"
                          )}
                        >
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
