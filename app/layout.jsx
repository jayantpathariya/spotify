import { Figtree } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { Player } from "@/components/player";

import ReduxProvider from "@/providers/redux-provider";
import { MobileNav } from "@/components/mobile-nav";
import { MobilePlayer } from "@/components/mobile-player";
import { PlayerProvider } from "@/providers/player-provider";

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
        <ReduxProvider>
          <div className="grid grid-cols-8 grid-rows-10 gap-x-2 text-neutral-400 h-full">
            <aside className="row-span-9 col-span-2 hidden lg:block lg:p-2 lg:pr-0">
              <Sidebar />
            </aside>
            <PlayerProvider>
              <main className="col-span-8 row-span-9 lg:col-span-6 lg:p-2 lg:pl-0">
                {children}
                <MobilePlayer />
              </main>
              <footer className="col-span-8 p-2 flex items-center justify-center">
                <Player />
                <MobileNav />
              </footer>
            </PlayerProvider>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
