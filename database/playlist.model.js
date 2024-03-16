import { Schema, models, model } from "mongoose";

const PlaylistSchema = new Schema({
  duration: {
    type: Number,
    required: true,
  },
  header_desc: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
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
    required: true,
  },
  play_count: {
    type: String,
    required: true,
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
    required: true,
  },
});

const Playlist = models.Playlist || model("Playlist", PlaylistSchema);

export default Playlist;
