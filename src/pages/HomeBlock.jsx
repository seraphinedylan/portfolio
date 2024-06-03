import Section from "~/components/Section";
import Desk2 from "~/images/desk-de.jpg";

function HomeBlock() {
  return (
    <Section className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${Desk2})` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-blue-900" />
      <div className="relative flex flex-col text-center text-white">
        <span className="text-6xl font-bold">Dylan Séraphine</span>
        <span className="text-xl">Portfolio</span>
      </div>
    </Section>
  );
}

export default HomeBlock;
