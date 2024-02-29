export const BrowseCard = ({ color, title }) => {
  return (
    <div className={`bg-${color}-500 h-24 rounded-md p-2`}>
      <p className="text-neutral-100 font-semibold text-lg">{title}</p>
    </div>
  );
};
