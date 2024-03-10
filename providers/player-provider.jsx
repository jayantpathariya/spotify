"use client";

import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Howl } from "howler";

import { playNextSong, playPrevSong, shuffleSongs } from "@/redux/songSlice";

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seek, setSeek] = useState(0);
  const [volume, setVolume] = useState(0.1);

  const { currentSong } = useSelector((state) => state.song);

  const dispatch = useDispatch();

  const playerRef = useRef(null);
  const player = playerRef.current;
  const duration = player?.duration();

  useEffect(() => {
    if (!currentSong?.download_links) return;

    playerRef.current = new Howl({
      src: [currentSong.download_links[4]?.link],
      autoplay: true,
      volume: 0.1,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setSeek(0);
        setIsPlaying(false);
        dispatch(playNextSong());
      },
    });

    return () => {
      playerRef.current?.unload();
    };
  }, [currentSong, dispatch]);

  useEffect(() => {
    if (player) {
      player.volume(volume);
    }
  }, [volume, player]);

  const updateProgress = useCallback(() => {
    if (player) {
      setSeek(player?.seek());
      requestAnimationFrame(updateProgress);
    }
  }, [player]);

  // update progress bar
  useEffect(() => {
    requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(updateProgress);
    };
  }, [currentSong, updateProgress]);

  const handleTogglePlay = (e) => {
    e?.stopPropagation();
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
    }
  };

  const handleVolumeChange = (value) => {
    const newVolume = parseFloat(value);
    setVolume(newVolume);
  };

  const handleSeek = (value) => {
    const newPosition = value;
    setSeek(newPosition);
    if (player) {
      player.pause();
      player.seek(newPosition);

      player.play();
    }
  };

  const handleMute = () => {
    if (player) {
      if (volume > 0) {
        player.volume(0);
        setVolume(0);
      } else {
        player.volume(0.1);
        setVolume(0.1);
      }
    }
  };

  const handleNextSong = () => {
    if (player) {
      dispatch(playNextSong());
    }
  };

  const handlePrevSong = () => {
    if (player) {
      dispatch(playPrevSong());
    }
  };

  const handleShuffleSongs = () => {
    if (player) {
      dispatch(shuffleSongs());
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        seek,
        volume,
        duration,
        handleTogglePlay,
        handleVolumeChange,
        handleSeek,
        handleMute,
        handleNextSong,
        handlePrevSong,
        handleShuffleSongs,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
