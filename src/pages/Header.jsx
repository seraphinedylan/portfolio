import Navbar from "~/components/NavBar";
import Home from "~/pages/Home";

function Header() {
  return (
    <div
      id="home"
      className="header relative z-0 bg-cover bg-center bg-no-repeat"
    >
      <Navbar className="fixed left-0 top-0 z-10 w-full" />
      <div className="mt-24 flex flex-col justify-end lg:mt-1 lg:min-h-screen">
        <Home />
      </div>
    </div>
  );
}

export default Header;
