import clsx from "clsx";
import PropTypes from "prop-types";

function PolygonBackground({
  fromColor,
  toColor,
  size = "md",
  left = false,
  children,
}) {
  const sizes = {
    md: "md:w-1/2 w-3/5",
    lg: "md:w-3/5 w-4/5",
  };

  return (
    <div className="relative -z-10">
      <div className="transform-gpu blur-xl md:blur-3xl">
        <div
          className={clsx(
            "absolute bottom-0 aspect-1155/678 opacity-50",
            sizes[size],
            {
              "left-0": left,
              "right-0": !left,
            }
          )}
          style={{
            backgroundImage: `linear-gradient(to top right, ${fromColor}, ${toColor})`,
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {children}
    </div>
  );
}
PolygonBackground.propTypes = {
  fromColor: PropTypes.string.isRequired,
  toColor: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["md", "lg"]),
  left: PropTypes.bool,
  children: PropTypes.node,
};

export default PolygonBackground;
