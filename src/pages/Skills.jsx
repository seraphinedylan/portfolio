import PolygonBackground from "~/components/PolygonBackground";
import PyramidCard from "~/components/PyramidCard";
import Section from "~/components/Section";
import LaravelIcon from "~/icons/laravel.svg";
import NodeIcon from "~/icons/nodejs.svg";
import ReactIcon from "~/icons/react.svg";
import TailwindIcon from "~/icons/tailwindcss.svg";

function Skills() {
  const languages = [
    { label: "Reactjs", icon: ReactIcon },
    { label: "Laravel", icon: LaravelIcon },
    { label: "Nodejs", icon: NodeIcon },
    { label: "Tailwindcss", icon: TailwindIcon },
    { label: "jesaispas", icon: LaravelIcon },
  ];
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3>Technologies</h3>
        <p className="w-4/5 text-center text-secondary-foreground md:w-1/3">
          I have been fortunate enough to receive praise for my work in several
          publications. Take a look below to learn more.
        </p>
      </div>

      <PyramidCard data={languages} />
      <PolygonBackground fromColor="#97d0f7" toColor="#034472" left />
    </Section>
  );
}

export default Skills;
