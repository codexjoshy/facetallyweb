import { logoSvg } from "../assets";
import { Container } from "./Container";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    {
      id: 1,
      link: "#home",
      name: "Home",
    },
    {
      id: 2,
      link: "#howItWorks",
      name: "How it works",
    },
    {
      id: 3,
      link: "#howItWorks",
      name: "Contact",
    },
    {
      id: 4,
      link: "#howItWorks",
      name: "Help",
    },
  ];

  const navItems = navLinks.map((item) => (
    <li key={item.id} className="my-4">
      <a href={item.link} className="text-white/70 ">
        {item?.name}
      </a>
    </li>
  ));

  return (
    <nav className="w-full relative">
      <Container
        as="div"
        className="w-full flex items-center justify-between py-5"
      >
        <div>
          <img src={logoSvg} alt="logo" className="h-10 w-full" />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="items-center justify-center gap-4 pl-3 hidden lg:flex">
            {navItems}
          </ul>
          <button className="p-3 bg-black/70 rounded-md text-white/80 ring-1 ring-black hidden lg:block">
            Download
          </button>
          <MenuIcon
            className="h-5 w-5 text-white lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </Container>
      <Container
        as="div"
        className={`absolute top-20 bg-[#664753] w-full ${
          showMenu ? "" : "hidden"
        }`}
      >
        <ul className="">{navItems}</ul>
      </Container>
    </nav>
  );
};
