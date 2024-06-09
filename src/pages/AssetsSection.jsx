import Card from "~/components/Card";
import PolygonBackground from "~/components/PolygonBackground";
import RocketIcon from "~/icons/RocketIcon";
import TerminalIcon from "~/icons/TerminalIcon";
import TrophyIcon from "~/icons/TrophyIcon";

function AssetsSection() {
  const assets = [
    {
      icon: TerminalIcon,
      title: "Full Stack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: TrophyIcon,
      title: "Industry Leader",
      description:
        "Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.",
    },
    {
      icon: RocketIcon,
      title: "Strategy-Minded",
      description:
        "Urna porttitor rhoncus dolor purus non enim praesent ornare.",
    },
  ];
  return (
    <div id="assets" className="pt-1">
      <div className="my-12 flex justify-center md:my-24">
        <Card className="mx-4 p-6 md:mx-24 md:p-10">
          <div className="z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-20">
            {assets.map((asset, index) => {
              const Icon = asset.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2 md:gap-4"
                >
                  <Icon size={40} gradient />
                  <h4>{asset.title}</h4>
                  <p className="text-lg text-secondary-foreground">
                    {asset.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <PolygonBackground fromColor="#97d0f7" toColor="#034472" />
    </div>
  );
}

export default AssetsSection;
