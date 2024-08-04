import PropTypes from "prop-types";

import Navbar from "~/components/NavBar";

function Header({ children }) {
  return (
    <header
      id="home"
      className="header relative z-0 bg-cover bg-center bg-no-repeat"
    >
      <Navbar className="fixed left-0 top-0 z-10 w-full" />
      <div className="mt-28 flex flex-col justify-end lg:mt-1 lg:min-h-screen">
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
