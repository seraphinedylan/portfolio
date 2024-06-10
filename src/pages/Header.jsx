import Navbar from "~/components/NavBar";
import Home from "~/pages/Home";

function Header() {
  return (
    <div
      id="home"
      className="header relative z-0 bg-cover bg-center bg-no-repeat"
    >
      <Navbar className="fixed left-0 top-0 z-10 w-full" />
      <div className="flex min-h-screen flex-col justify-end">
        <Home />
      </div>
    </div>
  );
}

export default Header;
