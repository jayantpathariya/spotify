import { HorizontalPlaylist } from "@/components/horizontal-playlist";
import { Playlist } from "@/components/playlist";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-neutral-200 lg:hidden">
        Good evening
      </h1>
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
      </div>
      <div className="mt-8 mr-7">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  );
}
