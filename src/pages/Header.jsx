import Navbar from "~/components/NavBar";
import Home from "~/pages/Home";

function Header() {
  return (
    <div className="header relative z-0 bg-cover bg-center bg-no-repeat">
      <Navbar className="fixed left-0 top-0 z-10 w-full" />
      <div className="pt-28 md:pt-36">
        <Home />
      </div>
    </div>
  );
}

export default Header;
