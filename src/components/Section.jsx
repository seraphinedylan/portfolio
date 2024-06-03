import PropTypes from "prop-types";

function Section({ className, children }) {
  return <div className={`h-dvh ${className}`}>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: "",
};

export default Section;
