import {
  faCode,
  faPeopleGroup,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import Chip from "~/components/Chip";
import Hero from "~/components/Hero";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 py-0 md:flex-row md:py-14">
      <div className="to-background absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-b from-transparent md:inline-block" />
      <Hero
        title="Hello, my name is Dylan Séraphine"
        tagline="I am a Full Stack Developer who is currently based in Bordeaux, France."
      >
        <div className="hidden items-center space-x-3 md:flex">
          <Chip startIcon={faCode} label="Lorem Ipsum" size="lg" />
          <Chip startIcon={faPeopleGroup} label="Lorem Ipsum" size="lg" />
          <Chip startIcon={faRocket} label="Lorem Ipsum" size="lg" />
        </div>
      </Hero>
      <div className="hidden px-4 md:inline-block md:px-0">
        <img
          alt="me"
          width="480"
          height="620"
          src="src/images/Subject.png"
          className=" object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Home;
