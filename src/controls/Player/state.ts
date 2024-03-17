import { atomWithReducer, selectAtom } from "jotai/utils";

import { TrackList } from "./tracks";
import { ReducerAction, ReducerState } from "./types";

const initPlayerState: ReducerState = {
  tracklist: TrackList,
  currentTrackIndex: 0,
  status: "paused",
  loading: false,
  currentTime: 0,
  totalTime: 0,
};

const playerReducer = (
  state: ReducerState,
  action: ReducerAction,
): ReducerState => {
  switch (action.type) {
    case "PLAY":
      console.log(`ready to play at: ${state.currentTime}`);
      return { ...state, status: "playing" };
    case "PAUSE":
      console.log(`user trigger paused at: ${action.currentTime}`);
      return {
        ...state,
        status: "paused",
        currentTime: action.currentTime,
      };
    case "LOADING":
      return { ...state, loading: action.loading };
    case "LOADED":
      return {
        ...state,
        loading: false,
        totalTime: Math.floor(action.totalTime),
      };
    case "PROGRESS":
      return { ...state, currentTime: action.currentTime };
    case "SEEK":
      console.log(`user trigger seek to :${action.currentTime}`);
      return { ...state, currentTime: action.currentTime };
    case "PREV_TRACK":
      console.log("user trigger prev track");
      return {
        ...state,
        currentTime: 0,
        totalTime: 0,
        currentTrackIndex:
          state.currentTrackIndex === 0
            ? state.tracklist.length - 1
            : state.currentTrackIndex - 1,
      };
    case "NEXT_TRACK":
      console.log("user trigger next track");
      return {
        ...state,
        currentTime: 0,
        totalTime: 0,
        currentTrackIndex:
          state.currentTrackIndex === state.tracklist.length - 1
            ? 0
            : state.currentTrackIndex + 1,
      };
    case "RESET":
      return initPlayerState;
    default:
      return state;
  }
};

export const playerAtom = atomWithReducer<ReducerState, ReducerAction>(
  initPlayerState,
  playerReducer,
);

export const trackAtom = selectAtom(
  playerAtom,
  (player) => player.tracklist[player.currentTrackIndex],
);
