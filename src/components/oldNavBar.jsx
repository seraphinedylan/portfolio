import { times } from "lodash";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-blue-900 p-4">
      <ul className="flex items-center space-x-4">
        <li className="text-lg font-bold">MyLogo</li>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-warning-500"
          >
            ACCUEIL
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-52}
            className="text-white hover:text-warning-500"
          >
            À PROPOS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-52}
            className="text-white hover:text-warning-500"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
