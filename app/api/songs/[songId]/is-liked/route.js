import { NextResponse } from "next/server";

import Playlist from "@/database/playlist.model";
import Song from "@/database/song.model";

export async function GET(_, { params }) {
  try {
    const song = await Song.findOne({ song_id: params.songId });

    const isSongExits = await Playlist.findOne({
      title: "Liked Songs",
      list: song._id,
    });

    console.log(isSongExits);

    if (isSongExits) {
      return NextResponse.json({ isLiked: true });
    }

    return NextResponse.json({ isLiked: false });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
