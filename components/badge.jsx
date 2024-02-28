export const Badge = ({ title }) => {
  return (
    <button className="bg-neutral-800/80 py-1.5 px-2.5 rounded-full text-sm hover:bg-neutral-800 transition duration-300">
      {title}
    </button>
  );
};
