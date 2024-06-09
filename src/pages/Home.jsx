import {
  faCode,
  faPeopleGroup,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";

import MouseAnimation from "~/assets/animations/mouse.json";
import Chip from "~/components/Chip";
import Hero from "~/components/Hero";

function Home() {
  const scrollDown = () => {
    const nextSection = document.getElementById("workSection");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-b from-transparent to-background md:inline-block" />
        <div
          className="absolute bottom-4 hidden cursor-pointer justify-center md:flex"
          onClick={scrollDown}
        >
          <Lottie animationData={MouseAnimation} className="h-auto w-14" />
        </div>
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
    </>
  );
}

export default Home;
