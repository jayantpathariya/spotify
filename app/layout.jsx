import { Figtree } from "next/font/google";
import { Sidebar } from "@/components/sidebar";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description:
    "Spotify is a digital music service that gives you access to millions of songs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="grid grid-cols-5 grid-rows-10 gap-x-2 text-neutral-400 lg:p-2 h-full">
          <aside className="row-span-9 hidden lg:block">
            <Sidebar />
          </aside>
          <main className="col-span-5 row-span-9 lg:col-span-4">
            {children}
          </main>
          <footer className="p-4 hidden lg:block">Player</footer>
        </div>
      </body>
    </html>
  );
}
