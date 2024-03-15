import api from "@/services/api";
import { config } from "@/constant/config";

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

    return response.json();
  } catch (error) {
    console.log("[GET_SEARCH]", error);
  }
};
