import Card from "~/components/Card";
import PolygonBackground from "~/components/PolygonBackground";
import Section from "~/components/Section";
import RocketIcon from "~/icons/RocketIcon";
import TerminalIcon from "~/icons/TerminalIcon";
import TrophyIcon from "~/icons/TrophyIcon";

function AssestSection() {
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
    <Section className="flex flex-col justify-center px-5 md:px-20">
      <Card className="p-6 md:p-10">
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

      <PolygonBackground fromColor="#97d0f7" toColor="#034472" />
    </Section>
  );
}

export default AssestSection;
