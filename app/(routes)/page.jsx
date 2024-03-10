import { getHomeData } from "@/actions/get-home-data";
import { HorizontalPlaylist } from "@/components/horizontal-playlist";
import { Playlist } from "@/components/playlist";

export default async function Home() {
  const result = await getHomeData();

  const sortedResults = Object?.values(result?.modules)?.sort(
    (a, b) => a.position - b.position
  );

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
        {sortedResults.map((item) => (
          <Playlist
            key={item.source}
            title={item.title}
            playlist={result[item.source]}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
}
