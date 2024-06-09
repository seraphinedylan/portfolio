import AssetsSection from "~/pages/AssetsSection";
import Contact from "~/pages/Contact";
import Footer from "~/pages/Footer";
import Header from "~/pages/Header";
import Skills from "~/pages/Skills";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="shrink-0 grow">
        <AssetsSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
