function TerminalIcon({ size = 40, gradient, strokeWidth = 2, ...props }) {
  const gradientId =
    "gradient-" + Math.round(Math.random() * 10e12).toString(36);

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      strokeWidth={`${size / 5}px`}
      {...props}
    >
      {gradient && (
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor="#034072" />
          <stop offset="100%" stopColor="#97cff7" />
        </linearGradient>
      )}

      <path
        fill={gradient ? `url(#${gradientId})` : "currentColor"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1.5L1.5 3v18L3 22.5h18l1.5-1.5V3L21 1.5H3zM3 21V3h18v18H3zm5.656-4.01l1.038 1.061 5.26-5.243v-.912l-5.26-5.26-1.035 1.06 4.59 4.702-4.593 4.592z"
      />
    </svg>
  );
}

export default TerminalIcon;
