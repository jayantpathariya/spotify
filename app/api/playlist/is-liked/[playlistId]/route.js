import Playlist from "@/database/playlist.model";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    const playlist = await Playlist.findOne({ playlist_id: params.playlistId });

    if (!playlist) {
      return NextResponse.json({ liked: false });
    }

    return NextResponse.json({ liked: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
