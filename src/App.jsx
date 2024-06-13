import Footer from "~/components/Footer";
import Header from "~/components/Header";
import AboutSection from "~/sections/AboutSection";
import AssetsSection from "~/sections/AssetsSection";
import ContactSection from "~/sections/ContactSection";
import HomeSection from "~/sections/HomeSection";
import SkillsSection from "~/sections/SkillsSection";
import WorkSection from "~/sections/WorkSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header>
        <HomeSection />
      </Header>
      <main className="shrink-0 grow">
        <AssetsSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
