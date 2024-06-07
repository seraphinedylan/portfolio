import Card from "~/components/Card";
import PolygonBackground from "~/components/PolygonBackground";
import RocketIcon from "~/icons/RocketIcon";
import Terminal from "~/icons/TerminalIcon";
import TrophyIcon from "~/icons/TrophyIcon";

function AssestSection() {
  return (
    <div className="mt-0 p-5 md:mt-4 md:p-20">
      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div> */}
      <Card>
        <div className="z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-20">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <Terminal size={34} gradient />
            <h4>Full Stack</h4>
            <p className="text-secondary-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <TrophyIcon size={34} gradient />

            <h4>Industry Leader</h4>
            <p className="text-secondary-foreground">
              Neque viverra justo nec ultrices dui. Est ultricies integer quis
              auctor elit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <RocketIcon size={34} gradient />
            <h4>Strategy-Minded</h4>
            <p className="text-secondary-foreground">
              Urna porttitor rhoncus dolor purus non enim praesent ornare.
            </p>
          </div>
        </div>
      </Card>

      <PolygonBackground fromColor="#97d0f7" toColor="#034472" />
    </div>
  );
}

export default AssestSection;
