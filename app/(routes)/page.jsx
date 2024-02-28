import { HorizontalPlaylist } from "@/components/horizontal-playlist";
import { Playlist } from "@/components/playlist";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
      </div>
      <div className="mt-8">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  );
}
