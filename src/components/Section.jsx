import clsx from "clsx";
import PropTypes from "prop-types";

function Section({ className, children, id }) {
  return (
    <div id={id} className={clsx("min-h-dvh w-full", className)}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Section;
