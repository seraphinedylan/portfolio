import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "~/components/Card";
import Section from "~/components/Section";

function WorkSection() {
  const projects = [
    { label: "Project 1" },
    { label: "Project 2" },
    { label: "Project 3" },
    { label: "Project 4" },
  ];

  const ProjectCard = ({ project, index }) => {
    return (
      <Card
        className={`h-44 w-full border border-border bg-card p-4 shadow-md lg:h-80 ${index % 2 === 1 ? "lg:-translate-y-10" : ""}`}
      >
        <div className="w-fit rounded-xl bg-accent p-2 text-sm font-bold text-popover-foreground">
          {project.label}
        </div>
      </Card>
    );
  };

  return (
    <Section id="work" className="space-y-12 lg:space-y-24">
      <div className="flex flex-col px-0 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-start xl:px-20">
        <div>
          <h3>Selected Work</h3>
          <p className="mt-3 font-brand text-secondary-foreground lg:w-3/5">
            Take a look below at some of my featured work for clients from the
            past few years.
          </p>
        </div>
        <div className="hidden lg:inline-block">
          <button className="group relative rounded-full bg-gradient-to-tr from-destructive to-accent lg:px-8 lg:py-4 lg:text-lg">
            View All
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-lg transition-transform group-hover:pl-1"
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mx-5 grid w-full grid-cols-1 justify-items-center gap-4 md:mx-6 lg:mx-8 lg:grid-cols-2 lg:gap-14 xl:mx-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default WorkSection;
