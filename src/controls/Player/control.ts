import { useRef, useEffect } from "react";

import { useAtom, useAtomValue } from "jotai";

import { playerAtom, trackAtom } from "./state";
import { PlayerStatus, Track } from "./types";

export const usePlayerControl = () => {
  const [player, dispatch] = useAtom(playerAtom);
  const track = useAtomValue(trackAtom);

  const acRef = useRef<AudioContext>(null);
  const abRef = useRef<AudioBuffer>(null);
  const sNodeRef = useRef<AudioBufferSourceNode>(null);

  const elapsedTime = useRef(0);
  const animationFrameRef = useRef<number>(null);
  const prevStatus = useRef<PlayerStatus>("paused");

  const getCurrentTime = () => acRef.current.currentTime - elapsedTime.current;

  const createSource = (buffer: AudioBuffer) => {
    const source = acRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(acRef.current.destination);
    sNodeRef.current = source;
    console.log("audio buffer source created");
  };

  const loadTrack = async (newTrack: Track) => {
    if (acRef.current) {
      console.log(`loading track: ${newTrack.trackName}`);
      dispatch({ type: "LOADING", loading: true });
      try {
        const response = await fetch(newTrack.trackUrl);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await acRef.current.decodeAudioData(arrayBuffer);

        abRef.current = audioBuffer;

        console.log(`audio buffer created, total: ${audioBuffer.duration}`);
        createSource(audioBuffer);
        console.log(`audio buffer source connected`);
        dispatch({ type: "LOADED", totalTime: audioBuffer.duration });
      } catch (e) {
        console.error(e);
        dispatch({ type: "LOADING", loading: false });
      }
    }
  };

  const play = async () => {
    if (!sNodeRef.current && abRef.current) {
      console.log("resuming the buffer source");
      createSource(abRef.current);
    }

    if (sNodeRef.current && player.status === "paused") {
      sNodeRef.current.start(0, player.currentTime);
      elapsedTime.current = acRef.current.currentTime - player.currentTime;
      dispatch({ type: "PLAY" });
    }
  };

  const pause = () => {
    prevStatus.current = player.status;
    if (sNodeRef.current && player.status === "playing") {
      sNodeRef.current.stop();
      sNodeRef.current = null;

      console.log("audio buffer source killed");
      dispatch({ type: "PAUSE", currentTime: getCurrentTime() });
    }
  };

  const prev = () => {
    pause();
    dispatch({ type: "PREV_TRACK" });
  };

  const next = () => {
    pause();
    dispatch({ type: "NEXT_TRACK" });
  };

  const seek = (time: number) => {
    dispatch({ type: "SEEK", currentTime: time });
  };

  const updateProgress = () => {
    if (sNodeRef.current) {
      dispatch({ type: "PROGRESS", currentTime: getCurrentTime() });

      if (getCurrentTime() >= player.totalTime) {
        console.log("track ended");
        next();
      }
    }
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };

  // Initialize
  useEffect(() => {
    acRef.current = new AudioContext();
    return () => {
      acRef.current.close();
      dispatch({ type: "RESET" });
    };
  }, []);

  // ---- State Synchronize ----

  useEffect(() => {
    loadTrack(track);
  }, [player.currentTrackIndex]);

  useEffect(() => {
    if (prevStatus.current === "playing" && player.totalTime > 0) {
      play();
    }
  }, [player.totalTime]);

  useEffect(() => {
    if (player.status === "playing") {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else {
      cancelAnimationFrame(animationFrameRef.current);
    }
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [player.status]);

  return {
    player,
    play,
    pause,
    prev,
    next,
    seek,
    toggle: player.status === "playing" ? pause : play,
    track,
  };
};
