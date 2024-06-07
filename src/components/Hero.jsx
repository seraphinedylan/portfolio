import PropTypes from "prop-types";

function Hero({ title, tagline, children }) {
  return (
    <div className="flex w-full flex-col text-center md:w-1/2 md:text-start">
      <span className="font-brand text-3xl font-bold md:text-7xl">{title}</span>
      <span className="mb-0 mt-4 px-8 font-body text-lg text-secondary-foreground md:mb-5 md:px-0 md:text-3xl">
        {tagline}
      </span>
      {children}
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
