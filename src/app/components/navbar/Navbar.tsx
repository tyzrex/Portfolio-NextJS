import Link from "next/link";
// import Logo from "@/../public/logo1.webp";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { Navlinks } from "./Navbardata";
import { INavlinks } from "./Navbardata";
import Logo from "@/../public/logo.png";
import { TbBrandTorchain } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav>
      <div
        id="navbar"
        className="relative z-1 bg-accent-foreground text-text-light justify-center h-[90px] items-center hidden lg:flex max-w-layout border-b border-b-text-light/50"
      >
        <div className="max-w-layout flex justify-center w-full items-center ">
          <div className="flex justify-between items-center w-full">
            <div className="logo flex justify-center items-center gap-4">
              <Link prefetch={false} href="/">
                {/* <Image src={Logo} alt="logo" className="w-[150px]" /> */}
                <h1 className="text-2xl font-bold flex-center gap-2">
                  <TbBrandTorchain className="text-3xl text-accent" />
                  <span>
                    Sulav
                    <span className=""> Baral</span>
                  </span>
                </h1>
              </Link>
            </div>

            <div className="menu-items flex justify-center items-center gap-7 ">
              <div className="hidden lg:flex justify-center items-center gap-8 cursor-pointer top-0 ">
                {Navlinks?.map((item: INavlinks, index: number) => {
                  return (
                    <Link prefetch={false} href={item.href} key={index}>
                      <div
                        className="font-medium  text-md lg:text-lg text-text-light hover:text-accent-1 color-transition rounded-lg transition duration-300 ease-in-out nav-links
                        "
                      >
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu className="block lg:hidden" />
    </nav>
  );
};

export default Navbar;
