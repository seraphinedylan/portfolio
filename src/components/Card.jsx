function Card({ children }) {
  return (
    <div className="rounded-xl border border-secondary bg-card p-6 shadow-sm md:rounded-3xl md:p-10">
      {children}
    </div>
  );
}

export default Card;
