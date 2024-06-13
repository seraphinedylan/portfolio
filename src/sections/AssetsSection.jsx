import RocketIcon from "~/assets/icons/RocketIcon";
import TerminalIcon from "~/assets/icons/TerminalIcon";
import TrophyIcon from "~/assets/icons/TrophyIcon";
import Card from "~/components/Card";

function AssetsSection() {
  const assets = [
    {
      icon: TerminalIcon,
      title: "Full Stack",
      description:
        "I'm a passionate developer with a love for creating beautiful and functional web applications.",
    },
    {
      icon: TrophyIcon,
      title: "Team Player",
      description:
        "Teamwork and sharing are values that are close to my heart.",
    },
    {
      icon: RocketIcon,
      title: "Driven Collaborator",
      description:
        "Highly motivated and ambitious, I'm fully committed to satisfying my team.",
    },
  ];
  return (
    <div id="assets">
      <div className="my-12 flex justify-center lg:my-24">
        <Card className="mx-5 p-6 md:mx-6 lg:mx-8 lg:p-10 xl:mx-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {assets.map((asset, index) => {
              const Icon = asset.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2 md:gap-2 lg:gap-4"
                >
                  <Icon size={40} gradient />
                  <p className="text-4xl font-bold md:text-3xl lg:text-4xl">
                    {asset.title}
                  </p>
                  <p className="md:text-md text-secondary-foreground lg:text-lg">
                    {asset.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AssetsSection;
