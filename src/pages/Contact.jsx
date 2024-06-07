import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="border-border flex flex-col items-center gap-12 border-y px-6 py-20 shadow-sm md:flex-row md:justify-between md:p-28">
      <h2 className="text-secondary-foreground text-center text-2xl md:w-1/3 md:text-start md:text-5xl">
        Interested in working together?
      </h2>
      <a
        href="mailto:me@example.com"
        className="from-destructive to-accent text-secondary-foreground group relative flex items-center gap-2 rounded-full bg-gradient-to-tr px-8 py-2 text-xl shadow-md md:px-10 md:py-4 md:text-3xl"
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

export default Contact;
