import { useState } from "react";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import BurgerMenuIcon from "~/assets/icons/BurgerMenuIcon";
import Terminal from "~/assets/icons/TerminalIcon";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const iconLinks = [
  {
    label: "Linkedin",
    href: "https://fr.linkedin.com/in/dylan-séraphine-7aab07195",
    icon: faLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/seraphinedylan",
    icon: faGithub,
  },
];

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="absolute left-0 top-0 z-50 w-full font-brand font-medium md:items-center md:px-10 md:py-5">
      <div className="flex items-center justify-between gap-6 p-6 md:p-0">
        <a href="/" className="flex items-center gap-2 no-underline md:text-xl">
          <Terminal size={28} gradient />
          Dylan Séraphine
        </a>
        {/* mobile button menu */}
        <div className="md:hidden">
          <button
            className="relative flex rounded-full bg-blue-gradient p-2 text-base shadow-md"
            onClick={toggleMenu}
          >
            <BurgerMenuIcon size={24} gradient />
          </button>
        </div>
        {/* end mobile button menu */}

        {/* deskop menu */}
        <ul className="text-md hidden rounded-full bg-card shadow-md md:flex md:flex-row md:px-3 md:py-2 lg:px-4 lg:py-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="inline-block rounded-full px-4 py-2 hover:bg-accent-foreground hover:text-secondary-foreground focus:bg-accent-foreground focus:text-secondary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* end deskop menu */}

        {/* deskop social networks menu */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex justify-end gap-4">
            {iconLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className=" text-muted transition-colors duration-200 hover:text-destructive-foreground focus:text-destructive-foreground"
              >
                <FontAwesomeIcon icon={link.icon} className="text-4xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* end deskop social networks menu */}

      {/* mobile menu */}
      <div
        className={clsx("bg-card md:hidden", {
          block: showMenu,
          hidden: !showMenu,
        })}
      >
        <ul className="flex flex-col gap-4 border-b border-popover-foreground p-8 text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="block">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row items-center gap-3 rounded-b-lg p-6 text-xl shadow-md">
          <div className="flex flex-wrap gap-2 text-xl lg:flex lg:justify-end lg:gap-0">
            {iconLinks.map((link, index) => (
              <a key={index} href={link.href} className="p-2">
                <FontAwesomeIcon icon={link.icon} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* end mobile menu */}
    </nav>
  );
}

export default NavBar;
