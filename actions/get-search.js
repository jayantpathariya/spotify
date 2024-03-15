import { createImageLinks } from "@/lib/utils";

export const getSearch = async (query) => {
  try {
    const url = new URL("https://www.jiosaavn.com/api.php");

    url.searchParams.append("__call", "autocomplete.get");
    url.searchParams.append("_format", "json");
    url.searchParams.append("_marker", "0");
    url.searchParams.append("ctx", "web6dot0");
    url.searchParams.append("api_version", "4");
    url.searchParams.append("query", query);

    const response = await fetch(url.toString());
    const data = await response.json();

    const result = {
      topquery: data.topquery?.data?.map((item) => ({
        images: createImageLinks(item.image),
        link: item?.perma_url.split("/").pop() || item?.id,
        ...item,
      })),
      songs: data.songs?.data?.map((item) => ({
        images: createImageLinks(item.image),
        link: item?.perma_url.split("/").pop(),
        ...item,
      })),
      albums: data.albums?.data?.map((item) => ({
        images: createImageLinks(item.image),
        link: item?.perma_url.split("/").pop(),
        ...item,
      })),
      playlists: data.playlists?.data?.map((item) => ({
        images: createImageLinks(item.image),
        link: item?.perma_url.split("/").pop(),
        ...item,
      })),
    };

    return result;
  } catch (error) {
    console.log("[GET_SEARCH]", error);
  }
};
