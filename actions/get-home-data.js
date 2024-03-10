import { config } from "@/constant/config";
import { createImageLinks } from "@/lib/utils";
import api from "@/services/api";

export const getHomeData = async () => {
  try {
    const response = await api(config.endpoints.home);

    const data = {
      new_trending: response?.data?.new_trending?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
        list_count: item?.list_count,
        list: item?.list,
        year: item?.year,
        primary_artists: item?.more_info?.artistMap?.primary_artists,
        artists: item?.more_info?.artistMap,
        release_date: item?.more_info?.release_date,
        song_count: item?.more_info?.song_count,
      })),
      top_playlists: response?.data?.top_playlists?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
        song_count: item?.song_count,
      })),
      new_albums: response?.data?.new_albums?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
        primary_artists: item?.more_info?.artistMap?.primary_artists,
        artists: item?.more_info?.artistMap,
        release_date: item?.more_info?.release_date,
        song_count: item?.more_info?.song_count,
      })),
      browse_discover: response?.data?.browse_discover?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
      })),
      charts: response?.data?.charts?.map((item) => ({
        id: item?.id,
        title: item?.title,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
        song_count: item?.count,
      })),
      "promo:vx:data:76": response?.data["promo:vx:data:76"]?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
      })),
      "promo:vx:data:185": response?.data["promo:vx:data:185"]?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
      })),
      "promo:vx:data:113": response?.data["promo:vx:data:113"]?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
      })),
      "promo:vx:data:116": response?.data["promo:vx:data:116"]?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
      })),
      "promo:vx:data:142": response?.data["promo:vx:data:142"]?.map((item) => ({
        id: item?.id,
        title: item?.title,
        subtitle: item?.subtitle,
        images: createImageLinks(item?.image),
        type: item?.type,
        link: item?.perma_url.split("/").pop(),
      })),
      modules: Object.keys(response?.data?.modules)
        ?.map((key) => {
          if (
            key === "new_trending" ||
            key === "top_playlists" ||
            key === "new_albums" ||
            key === "browse_discover" ||
            key === "charts" ||
            key === "promo:vx:data:76" ||
            key === "promo:vx:data:185" ||
            key === "promo:vx:data:113" ||
            key === "promo:vx:data:116" ||
            key === "promo:vx:data:142"
          ) {
            return {
              source: response?.data?.modules[key]?.source,
              position: response?.data?.modules[key]?.position,
              title: response?.data?.modules[key]?.title,
            };
          } else {
            return null;
          }
        })
        .filter((item) => item !== null),
    };

    return data;
  } catch (error) {
    console.log("[GET_HOME_DATA]", error);
    return null;
  }
};
