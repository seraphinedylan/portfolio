import DockerIcon from "~/assets/icons/docker.svg";
import LaravelIcon from "~/assets/icons/laravel.svg";
import NodeIcon from "~/assets/icons/nodejs.svg";
import ReactIcon from "~/assets/icons/react.svg";
import TailwindIcon from "~/assets/icons/tailwindcss.svg";
import PolygonBackground from "~/components/PolygonBackground";
import PyramidCard from "~/components/PyramidCard";

function SkillsSection() {
  const languages = [
    { label: "Reactjs / React Native", icon: ReactIcon },
    { label: "Laravel", icon: LaravelIcon },
    { label: "Nodejs", icon: NodeIcon },
    { label: "Tailwindcss", icon: TailwindIcon },
    { label: "Docker", icon: DockerIcon },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3>Technologies</h3>
        <p className="text-md w-4/5 text-center text-secondary-foreground md:w-1/3">
          Skilled in diverse technologies spanning front-end frameworks,
          back-end languages, and database management systems.
        </p>
      </div>

      <PyramidCard data={languages} />
      <PolygonBackground fromColor="#97d0f7" toColor="#034472" left />
    </div>
  );
}

export default SkillsSection;
