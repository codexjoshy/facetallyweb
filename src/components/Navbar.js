import { logoSvg } from '../assets';
import { Container } from './Container';
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    {
      id: 1,
      link: '/',
      name: 'Home',
    },
    {
      id: 2,
      link: '/about',
      name: 'About',
    },
    {
      id: 3,
      link: '/contact',
      name: 'Contact',
    },
  ];

  const navItems = navLinks.map((item) => (
    <li key={item.id} className="my-4">
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          isActive ? 'link active text-white/70' : 'link text-white/70'
        }
      >
        {item?.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="w-full relative banner">
      <Container
        as="div"
        className="w-full flex items-center justify-between py-5"
      >
        <a href="/">
          <img src={logoSvg} alt="logo" className="h-10 w-full" />
        </a>
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
          showMenu ? '' : 'hidden'
        }`}
      >
        <ul className="">{navItems}</ul>
      </Container>
    </nav>
  );
};
