import { Schema, models, model } from "mongoose";

const SongSchema = new Schema({
  download_links: [
    {
      link: {
        type: String,
        required: true,
      },
      quality: {
        type: String,
        required: true,
      },
    },
  ],
  song_id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  list_count: {
    type: Number,
    required: true,
  },
  list: {
    type: String,
  },
  more_info: {
    album: {
      type: String,
      required: true,
    },
    album_id: {
      type: String,
      required: true,
    },
    artistMap: {
      artists: [
        {
          id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          perma_url: {
            type: String,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
        },
      ],
      featured_artists: [
        {
          id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          perma_url: {
            type: String,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
        },
      ],
      primary_artists: [
        {
          id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          perma_url: {
            type: String,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
        },
      ],
    },
    duration: {
      type: Number,
      required: true,
    },
    encrypted_drm_media_url: {
      type: String,
      required: true,
    },
    has_lyrics: {
      type: Boolean,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
  },
  perma_url: {
    type: String,
    required: true,
  },
  play_count: {
    type: Number,
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

const Song = models.Song || model("Song", SongSchema);

export default Song;
