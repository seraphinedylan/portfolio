import PropTypes from "prop-types";

function Section({ className, children, id }) {
  return (
    <div id={id} className={`my-20 min-h-dvh w-full ${className}`}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
