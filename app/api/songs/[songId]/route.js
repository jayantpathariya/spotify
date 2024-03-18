import { NextResponse } from "next/server";

import api from "@/services/api";
import Song from "@/database/song.model";
import Playlist from "@/database/playlist.model";
import auth from "@/helpers/auth";
import User from "@/database/user.model";
import { config } from "@/constant/config";
import { createDownloadLinks } from "@/lib/utils";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(_, { params }) {
  try {
    const { songId } = params;
    const response = await api(config.endpoints.songs.id, {
      pids: songId,
    });

    const data = response.data.songs.map((song) => {
      return {
        ...song,
        download_links: createDownloadLinks(song.more_info.encrypted_media_url),
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.message }),

      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const { isLiked, action, ...body } = await req.json();

    const session = await auth();

    connectToDatabase();

    let song = await Song.findOne({ song_id: body.id });

    if (!song) {
      song = await Song.create({
        song_id: body.id,
        ...body,
      });
    }

    let playlist = await Playlist.findOne({ title: "Liked Songs" });

    if (action === "like") {
      if (!playlist) {
        console.log("playlist not exists");

        playlist = await Playlist.create({
          duration: 241,
          header_desc: "",
          image:
            "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg",
          list: [song._id],
          list_count: "1",
          perma_url: "",
          play_count: "1",
          subtitle: "Liked Songs",
          title: "Liked Songs",
          type: "playlist",
          year: `${new Date().getFullYear()}`,
        });

        await User.findOneAndUpdate(
          { _id: session.user.id },
          { $push: { playlists: playlist._id } }
        );
      } else {
        if (isLiked) {
          playlist.list.push(song._id);
          playlist.list_count = playlist.list.length;
          await playlist.save();
        } else {
          playlist.list.pull(song._id);
          playlist.list_count = playlist.list.length;
          await playlist.save();
        }
      }
    }

    return NextResponse.json({ message: "success", data: song });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
