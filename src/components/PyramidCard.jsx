import PropTypes from "prop-types";

function PyramidCard({ data }) {
  const rowCount = Math.ceil((Math.sqrt(8 * data.length + 1) - 1) / 2); // Calcul du nombre de rangées
  let index = 0;
  const rows = [];

  for (let i = rowCount; i > 0; i--) {
    const row = data.slice(index, index + i);
    rows.push(row);
    index += i;
  }

  return (
    <div className="my-20 flex flex-col items-center gap-8">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-8 md:flex-row"
        >
          {row.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex h-28 w-80 items-center justify-center rounded-lg border border-border bg-card md:h-36"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <img src={item.icon} alt={item.label} className="size-12" />
                <p className="text-md text-secondary-foreground">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

PyramidCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PyramidCard;
