import clsx from "clsx";
import PropTypes from "prop-types";

function Card({ children, className }) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border border-secondary bg-card shadow-sm md:rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
