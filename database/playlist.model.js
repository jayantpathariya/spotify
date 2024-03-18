import { Schema, models, model } from "mongoose";

const PlaylistSchema = new Schema({
  playlist_id: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  header_desc: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  list: {
    type: [Schema.Types.ObjectId],
    ref: "Song",
  },
  list_count: {
    type: String,
    required: true,
  },
  perma_url: {
    type: String,
  },
  play_count: {
    type: String,
  },
  subtitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
});

const Playlist = models.Playlist || model("Playlist", PlaylistSchema);

export default Playlist;
