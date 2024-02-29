/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // [ index ] var(--tracklist-index-column-width, 16px) [ first ] minmax(120px, var(--col1, 4fr)) [ var1 ] minmax(120px, var(--col2, 2fr)) [ last ] minmax(120px, var(--col3, 1fr));
        table: "34px minmax(120px, 4fr) minmax(120px, 2fr) minmax(60px, 1fr)",
      },
    },
  },
  plugins: [],
};
