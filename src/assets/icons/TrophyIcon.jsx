function TrophyIcon({ size = 40, gradient, strokeWidth = 2, ...props }) {
  const gradientId =
    "gradient-" + Math.round(Math.random() * 10e12).toString(36);

  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
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
        d="m26 7h-2v-1a2.0023 2.0023 0 0 0 -2-2h-12a2.0023 2.0023 0 0 0 -2 2v1h-2a2.0023 2.0023 0 0 0 -2 2v3a4.0045 4.0045 0 0 0 4 4h.322a8.1689 8.1689 0 0 0 6.678 5.9341v4.0659h-5v2h12v-2h-5v-4.0689a7.9661 7.9661 0 0 0 6.74-5.9311h.26a4.0045 4.0045 0 0 0 4-4v-3a2.0023 2.0023 0 0 0 -2-2zm-18 7a2.0023 2.0023 0 0 1 -2-2v-3h2zm14 0a6 6 0 0 1 -6.1855 5.9971 6.1991 6.1991 0 0 1 -5.8145-6.2906v-7.7065h12zm4-2a2.0023 2.0023 0 0 1 -2 2v-5h2z"
      />
      <path d="m0 0h32v32h-32z" fill="none" />
    </svg>
  );
}

export default TrophyIcon;
