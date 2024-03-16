import { MouseEventHandler } from "react";

import confetti from "canvas-confetti";
import { useAtomValue } from "jotai";
import { Heart } from "lucide-react";

import { Button } from "@nextui-org/button";

import { playerAtom, trackAtom } from "@/controls/Player/state";

const TrackInfo = () => {
  const track = useAtomValue(trackAtom);
  const player = useAtomValue(playerAtom);

  const handleLike: MouseEventHandler<HTMLButtonElement> = (e) =>
    confetti({
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight - 0.05,
      },
    });

  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-0">
        <h3 className="font-semibold text-foreground/90">{track.albumName}</h3>
        <p className="text-sm text-foreground/80">
          {`${player.currentTrackIndex + 1} of ${player.tracklist.length} Tracks`}
        </p>
      </div>
      <Button
        isIconOnly
        radius="full"
        variant="light"
        className="-translate-y-2 translate-x-2 text-default-900/50 data-[hover]:bg-foreground/10"
        onClick={handleLike}
      >
        <Heart />
      </Button>
    </div>
  );
};
export default TrackInfo;
