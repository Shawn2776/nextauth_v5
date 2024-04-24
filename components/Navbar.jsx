"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { GrUserNew } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { HiMiniServerStack } from "react-icons/hi2";
import { SiPaperspace } from "react-icons/si";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const links = [
  { href: "/create", label: "Create User", icon: <GrUserNew size={25} /> },
  {
    href: "/client",
    label: "Client Member",
    icon: <RiComputerLine size={25} />,
  },
  {
    href: "/server",
    label: "Server Member",
    icon: <HiMiniServerStack size={25} />,
  },
  { href: "/public", label: "Public", icon: <SiPaperspace /> },
];

const removeFirstWord = (str) => str.split(" ")[0].toLowerCase();
const removeFirstLetter = (str) => str.slice(1);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header>
      <nav className="mb-2">
        <div className="flex items-center justify-between px-4 py-2 text-white bg-slate-700">
          <div className="flex justify-between w-full md:px-10">
            <h1>
              <Link href="/">MySite</Link>
            </h1>
            <div className="hidden gap-4 md:flex">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`${
                      removeFirstWord(link.label) ===
                      removeFirstLetter(pathname)
                        ? "text-gray-400 border-b-sky-500 border-b-4"
                        : "hover:text-gray-400 transition-colors duration-500"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <IoCloseSharp size={40} onClick={() => setIsOpen(false)} />
            ) : (
              <IoMenu size={40} onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
        <div className="relative flex justify-between md:hidden">
          <div
            className={`${
              isOpen
                ? "bg-slate-700 ml-[50%] text-white transition-transform duration-500 flex flex-col gap-6 p-4 h-screen pt-10 absolute top-0 left-0 w-1/2"
                : "hidden"
            }`}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  removeFirstWord(link.label) === removeFirstLetter(pathname)
                    ? "text-black border px-2 py-2 bg-white rounded-md"
                    : ""
                } flex gap-4 items-center`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.icon} {link.label}
              </Link>
            ))}
            <hr />
            <div className="absolute bottom-20">
              <Footer />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
