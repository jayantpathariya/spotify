import dayjs from "dayjs";
import duration from "dayjs/plugin//duration";
import { clsx } from "clsx";
import { cipher, util } from "node-forge";
import { twMerge } from "tailwind-merge";

dayjs.extend(duration);

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// create image links for different resolutions
export const createImageLinks = (link) => {
  if (!link) return false;

  const qualities = ["50x50", "150x150", "500x500"];

  return (
    qualities.map((quality) => ({
      quality,
      link: link.includes("150x150")
        ? link.replace("150x150", quality)
        : link.replace("50x50", quality),
    })) || false
  );
};

export const createDownloadLinks = (encryptedMediaUrl) => {
  if (!encryptedMediaUrl) return false;
  const url = decodeURIComponent(encryptedMediaUrl.replaceAll(" ", "+"));

  const qualities = [
    { id: "_12", bitrate: "12kbps" },
    { id: "_48", bitrate: "48kbps" },
    { id: "_96", bitrate: "96kbps" },
    { id: "_160", bitrate: "160kbps" },
    { id: "_320", bitrate: "320kbps" },
  ];

  const key = "38346591";
  const iv = "00000000";

  const encrypted = util.decode64(url);
  const decipher = cipher.createDecipher(
    "DES-ECB",
    util.createBuffer(key, "utf8")
  );

  decipher.start({ iv: util.createBuffer(iv, "utf8") });
  decipher.update(util.createBuffer(encrypted));
  decipher.finish();

  const decryptedLink = decipher.output.getBytes();

  const links =
    qualities.map((quality) => ({
      quality: quality.bitrate,
      link: decryptedLink.replace("_96", quality.id),
    })) || false;

  return links;
};

export const formatArtists = (artists) => {
  if (!artists) return [];
  const combinedArtists = [
    ...artists?.primary_artists,
    ...artists?.featured_artists,
    artists?.artists,
  ];

  // if more than 3 artists, show only 3 and add "and x more"
  if (combinedArtists.length > 3) {
    return `${combinedArtists
      .slice(0, 3)
      .map((artist) => artist.name)
      .join(", ")} and ${combinedArtists.length - 3} more`;
  }
};

export const formatDuration = (seconds) => {
  const durationObject = dayjs.duration(seconds, "seconds");
  const hours = durationObject.hours();
  const minutes = durationObject.minutes();
  const remainingSeconds = durationObject.seconds();

  let formattedDuration = "";

  if (hours > 0) {
    formattedDuration += `${hours} hr `;
  }

  if (minutes > 0) {
    formattedDuration += `${minutes} min`;
  }

  // Only show seconds if there are remaining seconds and the duration is less than an hour
  if (remainingSeconds > 0 && hours === 0) {
    formattedDuration += ` ${remainingSeconds} sec`;
  }

  // Handle the case where the duration is less than a minute
  if (formattedDuration === "" && remainingSeconds === 0) {
    formattedDuration = "0 sec";
  }

  return formattedDuration.trim();
};

export const secondsToMinutes = (seconds) => {
  const durationObject = dayjs.duration(seconds, "seconds");
  const minutes = durationObject.minutes();
  const remainingSeconds = durationObject.seconds();

  let formattedDuration = "";

  if (minutes > 0) {
    formattedDuration += `${minutes}:`;
  }

  formattedDuration += `${remainingSeconds.toString().padStart(2, "0")}`;

  return formattedDuration.trim();
};
