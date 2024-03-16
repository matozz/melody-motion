import AlbumUrl1 from "@/assets/JJ_Lin_No_Turning_Back.jpg?url";
import TrackUrl1 from "@/assets/JJ_Lin_No_Turning_Back.mp3?url";
import AlbumUrl2 from "@/assets/Martin_Garrix_Mesto_Breakaway.jpg?url";
import TrackUrl2 from "@/assets/Martin_Garrix_Mesto_Breakaway.mp3?url";

import { Track } from "./types";

export const TrackList: Track[] = [
  {
    albumName: "Drifter • Like You Do",
    albumUrl: AlbumUrl1,
    trackName: "No Turning Back - JJ Lin",
    trackUrl: TrackUrl1,
  },
  {
    albumName: "IDEM",
    albumUrl: AlbumUrl2,
    trackName: "Breakaway - Martin Garrix & Mesto",
    trackUrl: TrackUrl2,
  },
];
