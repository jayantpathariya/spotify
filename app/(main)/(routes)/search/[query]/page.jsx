import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

import TableItem from "@/components/table-item";
import { BackButton } from "@/components/back-button";
import { Playlist } from "@/components/playlist";
import { Table } from "@/components/table";
import { TopResultCard } from "@/components/top-result-card";
import { ResultSongs } from "@/components/result-songs";
import { getSearch } from "@/actions/get-search";
import { MobileSearch } from "@/components/mobile-search";

const QueryPage = async ({ params }) => {
  const query = params.query;

  const result = await getSearch(query.replaceAll("%20", "+"));

  const topQuery = result?.topquery[0];
  const songs = result?.songs;
  const albums = result?.albums;
  const playlists = result?.playlists;

  const isResult =
    Boolean(topQuery) ||
    Boolean(songs) ||
    Boolean(albums) ||
    Boolean(playlists);

  return (
    <>
      <div>
        {/* mobile ui */}
        <div className="lg:hidden">
          <div className="flex items-center gap-x-4 p-4">
            <BackButton className="p-0" />
            <div className="relative lg:hidden w-full">
              <GoSearch className="text-2xl text-neutral-900 absolute left-2 top-2" />
              <MobileSearch query={query} />
              {/* {value && (
              <button onClick={() => setValue("")}>
                <RxCross1 className="text-lg text-neutral-900 absolute right-2 top-2.5" />
              </button>
            )} */}
            </div>
          </div>

          {isResult && (
            <>
              <TableItem index={1} startIndex={0} track={topQuery} />
              <Table playlist={songs} />
            </>
          )}
        </div>
        {/* desktop ui */}
        {isResult && (
          <>
            <div className="grid-cols-6 gap-4 p-4 hidden lg:grid">
              <div className="col-span-2">
                <h2 className="text-2xl text-neutral-100 font-bold mb-1">
                  Top result
                </h2>
                {topQuery && (
                  <TopResultCard
                    title={topQuery?.title}
                    image={topQuery?.images[2]?.link}
                    subtitle={topQuery?.subtitle}
                    type={topQuery?.type}
                    link={topQuery?.link}
                    id={topQuery?.id}
                  />
                )}
              </div>
              <div className="col-span-4 ">
                <h2 className="text-2xl text-neutral-100 font-bold mb-2">
                  Songs
                </h2>
                <ResultSongs playlist={songs} />
              </div>
            </div>
            <div className="p-4">
              {/* <Playlist title="Artists" /> */}
              {albums?.length > 0 && (
                <Playlist title="Albums" playlist={albums} />
              )}
              {playlists?.length > 0 && (
                <Playlist title="Playlists" playlist={playlists} />
              )}
            </div>
          </>
        )}
      </div>
      {!isResult && (
        <div className="flex items-center justify-center h-full w-full mt-12">
          <h1 className="text-2xl font-bold text-neutral-200">
            No results found for {query?.replaceAll("%20", " ")}
          </h1>
        </div>
      )}
    </>
  );
};

export default QueryPage;
