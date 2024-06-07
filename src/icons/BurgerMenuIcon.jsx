function BurgerMenuIcon({
  size = 40,
  color,
  gradient,
  strokeWidth = 2,
  ...props
}) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      strokeWidth={`${size / 5}px`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export default BurgerMenuIcon;
