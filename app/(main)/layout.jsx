import { Sidebar } from "@/components/sidebar";
import { Player } from "@/components/player";
import { MobileNav } from "@/components/mobile-nav";
import { MobilePlayer } from "@/components/mobile-player";
import { PlayerProvider } from "@/providers/player-provider";

const MainLayout = ({ children }) => {
  return (
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
  );
};

export default MainLayout;
