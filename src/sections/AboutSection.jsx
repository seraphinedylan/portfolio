import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CircleBottomBackground from "~/assets/backgrounds/circle-bottom-background.png";
import CircleTopBackground from "~/assets/backgrounds/circle-top-background.png";
import PositifLogo from "~/assets/images/10positif-logo.svg";
import ElsanLogo from "~/assets/images/elsan-logo.png";
import IncommLogo from "~/assets/images/incomm-logo.png";
import MfLogo from "~/assets/images/mf-logo.png";
import Accordion from "~/components/Accordion";
import PolygonBackground from "~/components/PolygonBackground";
import Section from "~/components/Section";
import TimeLine from "~/components/TimeLine";

const descEn =
  "I like working in a team and especially when it allows me to strengthen my skills. I'm continuously improving my project management capabilities and stay updated with the latest technologies. Thanks to my experiences I can easily adapt to the different projects that are offered to me. Motivated and ambitious, I strive to exceed my team expectations.";

const experiences = [
  {
    period: "2022 - Today",
    title: "FullStack Developer",
    location: "Bordeaux, France",
    company: "Elsan",
    website: "https://www.elsan.care/fr",
    description:
      "Permanent contract - Design of a SaaS solution to facilitate the work of nursing and administrative staff, using Agile methodology.",
    technologies: [
      "Reactjs",
      "Laravel",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
    ],
    logo: ElsanLogo,
  },
  {
    period: "2021 - 2022",
    title: "FullStack Developer",
    location: "Bordeaux, France",
    company: "Elsan",
    website: "https://www.elsan.care/fr",
    description:
      "Internship - Design of mobile applications to improve the patient experience and development of SaaS solutions to simplify the work of nursing and administrative staff, using Agile methodology.",
    technologies: ["Reactjs", "React Native", "Laravel", "Bootstrap", "Mysql"],
    logo: ElsanLogo,
  },
  {
    period: "2020 - 2021",
    title: "Web Developer",
    location: "Bordeaux, France",
    company: "Incomm",
    website: "https://www.incomm.fr",
    description:
      "Apprenticeship - Website development, domain name transfer management, and deployment of new sites.",
    technologies: ["WordPress", "Prestashop", "PHP", "PhpMyAdmin", "Bootstrap"],
    logo: IncommLogo,
  },
  {
    period: "2019 - 2019",
    title: "Web Master",
    location: "Sainte-Clotilde, La Réunion",
    company: "Météo France",
    website: "https://meteofrance.re/fr",
    description:
      "Apprenticeship - Developing a blog to visualize data collected by sensors in the Indian Ocean and predict the onset of cyclones.",
    technologies: ["WordPress", "Prestashop", "PHP", "PhpMyAdmin", "Bootstrap"],
    logo: MfLogo,
  },
  {
    period: "2018 - 2018",
    title: "Web Integrator",
    location: "Sainte-Marie, La Réunion",
    company: "10Positif",
    website: "https://www.10positif.com",
    description:
      "Internship - Designing websites for a variety of clients, from individuals to large enterprises.",
    technologies: ["Reactjs", "WordPress", "Bootstrap"],
    logo: PositifLogo,
  },
];

const graduations = [
  {
    title: "Master",
    period: "2020 - 2022",
    location: "Bordeaux, France",
    school: "Epitech",
    description:
      "Title of Software Architect and Application Developer (RNCP Level 7) Master’s Degree",
  },
  {
    title: "Bachelor",
    period: "2019 - 2020",
    location: "Bordeaux, France",
    school: "Epitech",
    description:
      "Title of Web and Mobile Project Manager (RNCP Level II) Bachelor's Degree",
  },
  {
    title: "Associate's Degree",
    period: "2017 - 2019",
    location: "Saint-Denis, La Réunion",
    school: "Lycée Bellepierre",
    description:
      "BTS in IT Services for Organizations, Option SLAM (Software Solutions and Business Applications)",
  },
  {
    title: "High School Diploma",
    period: "2016 - 2017",
    location: "Saint-Denis, La Réunion",
    school: "Lycée Bellepierre",
    description: "Scientific Baccalaureate",
  },
];

function AboutSection() {
  return (
    <Section id="about" className="space-y-12 lg:space-y-24">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3>About Me</h3>
        <p className="text-md mx-4 text-secondary-foreground md:mx-0">
          Thanks for stopping by. Read below to learn more about myself and my
          background.
        </p>
      </div>
      <PolygonBackground fromColor="#97d0f7" toColor="#034472" />

      <div className="relative mx-5 flex flex-col justify-between gap-4 md:flex-row lg:mx-8 xl:mx-20">
        <div className="order-2 flex items-start justify-center md:order-1 md:justify-start">
          <TimeLine events={graduations} />
        </div>
        <div className="z-10 order-1 mt-10 flex items-center p-2 text-center md:order-2 lg:w-2/5 xl:w-1/2">
          <div className="text-md flex flex-col items-center space-y-4 font-brand font-semibold text-secondary-foreground md:text-base xl:text-xl">
            <p>{descEn}</p>
            <p className="text-ring">
              If you're interested, please feel free to contact me via email.
            </p>

            <a
              href="mailto:me@example.com"
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-destructive to-accent p-2 px-4 text-lg text-secondary-foreground"
            >
              Contact Me
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="transition-transform group-hover:pl-1"
              />
            </a>
          </div>
        </div>
        <div
          className="absolute top-0 z-0 hidden h-52 w-25 bg-cover bg-center object-cover md:right-0 md:block xl:right-20"
          style={{ backgroundImage: `url(${CircleTopBackground})` }}
        />
        <div
          className="absolute bottom-0 z-0 hidden h-52 w-25 bg-cover object-cover md:right-10 md:block lg:right-0 xl:right-20"
          style={{ backgroundImage: `url(${CircleBottomBackground})` }}
        />
      </div>

      <div className="flex justify-center">
        <div className="mx-5 w-full lg:mx-0 lg:w-730">
          <Accordion experiences={experiences} />
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
