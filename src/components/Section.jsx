import clsx from "clsx";
import PropTypes from "prop-types";

function Section({ className, children }) {
  return <div className={clsx("min-h-dvh w-full", className)}>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
