import { logoSvg } from "../assets";
import { Container } from "./Container";

export const Navbar = () => {
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

  return (
    <nav className="w-full">
      <Container
        as="div"
        className="w-full flex items-center justify-between py-5"
      >
        <div>
          <img src={logoSvg} alt="logo" className="h-10 w-full" />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex items-center justify-center gap-4 pl-3">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="text-white/70">
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="p-3 bg-black/70 rounded-md text-white/80 ring-1 ring-black">
            Download
          </button>
        </div>
      </Container>
    </nav>
  );
};
