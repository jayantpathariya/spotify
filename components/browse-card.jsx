export const BrowseCard = ({ color, title }) => {
  return (
    <div
      className="h-24 rounded-md p-2"
      style={{
        backgroundColor: color || "pink",
      }}
    >
      <p className="text-neutral-100 font-semibold text-lg">{title}</p>
    </div>
  );
};
