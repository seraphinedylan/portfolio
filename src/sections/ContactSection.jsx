import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-10 border-y border-border py-8 md:flex-row md:gap-0 md:px-6 md:py-16 lg:py-24">
      <h2 className="text-center text-2xl text-secondary-foreground md:w-1/3 md:text-start lg:text-5xl">
        Interested in working together ?
      </h2>
      <a
        href="mailto:dylan.seraphine@hotmail.com"
        className="group relative flex items-center gap-2 rounded-full bg-gradient-to-tr from-destructive to-accent px-8 py-2 text-xl text-secondary-foreground shadow-md md:px-5 md:py-2 lg:px-10 lg:py-4 lg:text-3xl"
      >
        Send Me a Message
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="transition-transform group-hover:pl-1"
        />
      </a>
    </div>
  );
}

export default ContactSection;
