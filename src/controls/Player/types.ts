export type Track = {
  trackName: string;
  trackUrl: string;
  albumName: string;
  albumUrl: string;
  themeColor: string;
};

export type ReducerAction = {
  type:
    | "PLAY"
    | "PAUSE"
    | "LOADING"
    | "LOADED"
    | "SEEK"
    | "PREV_TRACK"
    | "NEXT_TRACK"
    | "PROGRESS"
    | "RESET";
} & Partial<ReducerState>;

export type PlayerStatus = "paused" | "playing";

export type ReducerState = {
  tracklist: Track[];
  status: PlayerStatus;
  loading: boolean;
  currentTrackIndex: number;
  currentTime: number;
  totalTime: number;
};
