import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";

function Chip({
  startIcon,
  endIcon,
  label,
  color = "primary",
  onClick,
  className,
}) {
  const colorClasses = {
    primary: "text-primary bg-primary-foreground",
    seconday: "text-secondary bg-secondary-foreground",
  };

  return (
    <div
      className={clsx(
        "flex items-center rounded-full",
        colorClasses[color] ?? colorClasses.primary,
        className
      )}
      onClick={onClick}
    >
      {startIcon && <FontAwesomeIcon icon={startIcon} className="mr-2" />}
      <span>{label}</span>
      {endIcon && <FontAwesomeIcon icon={endIcon} className="ml-2" />}
    </div>
  );
}

Chip.propTypes = {
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

export default Chip;
