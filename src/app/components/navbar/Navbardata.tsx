import { HiOutlineHome } from "react-icons/hi";
import { GrNotes } from "react-icons/gr";
import { BsCalculator } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";

export interface INavlinks {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const Navlinks: INavlinks[] = [
  {
    name: "Home",
    href: "/",
    icon: <HiOutlineHome className="w-6 h-6" />,
  },
  {
    name: "About",
    href: "#",
    icon: <GrNotes className="w-6 h-6" />,
  },
  {
    name: "Projects",
    href: "#",
    icon: <BsCalculator className="w-6 h-6" />,
  },
  {
    name: "Contact",
    href: "/contact-us",
    icon: <BiMobileAlt className="w-6 h-6" />,
  },
];
