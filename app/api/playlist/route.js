import Playlist from "@/database/playlist.model";
import Song from "@/database/song.model";
import User from "@/database/user.model";
import auth from "@/helpers/auth";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { list, action, isLiked, ...rest } = body;

    const session = await auth();

    connectToDatabase();

    if (action === "like" && isLiked) {
      const playlist = await Playlist.create({ ...rest, playlist_id: rest.id });

      list.forEach(async (track) => {
        let song = await Song.findOne({ song_id: track.id });

        if (!song) {
          song = await Song.create({ song_id: track.id, ...track });
        }

        await Playlist.findOneAndUpdate(
          { _id: playlist._id },
          { $push: { list: song._id } }
        );
      });
      await User.findOneAndUpdate(
        { _id: session.user.id },
        { $push: { playlists: playlist._id } }
      );
    } else {
      const playlist = await Playlist.findOneAndDelete({
        playlist_id: rest.id,
      });

      await User.findOneAndUpdate(
        { _id: session.user.id },
        { $pull: { playlists: playlist._id } }
      );
    }

    return NextResponse.json({ message: "Playlist created" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
