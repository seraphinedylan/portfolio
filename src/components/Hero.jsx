import PropTypes from "prop-types";

function Hero({ title, tagline, children }) {
  return (
    <div className="flex flex-col gap-4 text-center lg:w-1/2 lg:text-start">
      <span className="font-brand text-3xl font-bold md:text-5xl xl:text-7xl">
        {title}
      </span>
      <span className="px-8 font-body text-lg text-secondary-foreground md:text-xl lg:px-0 lg:text-xl xl:text-3xl">
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
