import {
  Menu,
  X,
} from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  return (
    <>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="p-2 rounded-md text-orange-100">
              {" "}
              <Menu size={28} />
            </div>
          </SheetTrigger>
          <SheetContent
            className="bg-main
          border-r border-r-orange-100/30"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-orange-100">Logo</h1>

              <div className="flex justify-end">
                <SheetTrigger>
                  <div className="p-2 rounded-md text-orange-100">
                    {" "}
                    <X size={28} />
                  </div>
                </SheetTrigger>
              </div>
            </div>

            <nav aria-label="Global" className="py-10">
              <ul className="flex flex-col items-start gap-10 text-md">
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <a
                      className="text-orange-100 hover:text-orange-200"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
