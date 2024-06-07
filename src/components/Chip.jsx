import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";

function Chip({
  startIcon,
  endIcon,
  label,
  color = "primary",
  size = "md",
  onClick,
}) {
  const colorClasses = {
    primary: "text-primary bg-primary-foreground",
    seconday: "text-secondary bg-secondary-foreground",
  };

  const sizeClasses = {
    lg: "text-lg",
    md: "text-md",
    sm: "text-sm",
  };
  return (
    <div
      className={clsx(
        "flex items-center rounded-full px-4 py-2",
        sizeClasses[size] ?? sizeClasses.md,
        colorClasses[color] ?? colorClasses.primary
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
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
};

export default Chip;
