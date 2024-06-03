import Navbar from "~/components/NavBar";
import AboutBlock from "~/pages/AboutBlock";
import HomeBlock from "~/pages/HomeBlock";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <HomeBlock />
      </div>
      <div id="about">
        <AboutBlock />
      </div>
    </div>
  );
}

export default App;
