"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// import Logo from "@/../public/logo1.webp";
import Image from "next/image";
import classNames from "classnames";
import { RiMenu4Fill } from "react-icons/ri";
import { Navlinks } from "./Navbardata";

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
    <header className={props.className}>
      <div className="w-full items py-2 max-w-layout mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="logo flex justify-center items-center gap-4">
            <Link href="/">
              <Image src={""} alt="logo" className="w-[150px]" />
            </Link>
          </div>

          <div>
            <button className="navbar-open" onClick={handleNav}>
              <RiMenu4Fill className="w-12 h-12 text-red-500" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto transition-all duration-700 ease-in-out"
            : "fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto transition-all duration-700 ease-in-out transform -translate-x-[100%]"
        }
      >
        <nav className="max-w-[90%] flex flex-col h-full py-2 mx-auto w-full ">
          <div className="flex items-center mb-8">
            <div className="mr-auto leading-none">
              <Image src={""} alt="logo" className="w-[150px]" />
            </div>
            <button className="navbar-close" onClick={closeNav}>
              {/* <XMarkIcon className="w-12 h-12 text-accent-1" /> */}x
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
          <div className="mt-auto">
            <div className="pt-6">
              <Link href="/login">
                <div className="block px-4 py-4 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
                  Sign in
                </div>
              </Link>
              <Link href="/register">
                <div className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-accent-1 hover:bg-blue-700  rounded-xl">
                  Sign Up
                </div>
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-700 ">
              <span>Copyright © Fatafat Sewa 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
