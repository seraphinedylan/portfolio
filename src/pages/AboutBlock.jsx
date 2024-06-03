import Section from "~/components/Section";
import Puce from "~/images/puce.png";

const Lorem =
  "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.";

function AboutBlock() {
  return (
    <Section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${Puce})` }}
      />
      <div className="relative">
        <div className="flex items-center justify-center pt-5 text-5xl font-bold">
          À PROPOS
        </div>
        <div className="flex justify-between pt-4">
          <div className="w-1/2 bg-red-300">{Lorem}</div>
          <div className="w-1/2 bg-blue-300">langage techno</div>
        </div>
      </div>
    </Section>
  );
}

export default AboutBlock;
