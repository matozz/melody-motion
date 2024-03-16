import { FC } from "react";

import {
  Pause,
  Play,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

import { Button, ButtonProps } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";

import { usePlayerControl } from "@/controls/Player/control";
import { formatSeconds } from "@/utils";

const Controls: FC<{
  controller: ReturnType<typeof usePlayerControl>;
}> = ({ controller }) => {
  const { player, track, toggle, next, prev } = controller;

  const ActionMap: { icon: React.ReactNode; props?: ButtonProps }[] = [
    { icon: <Repeat1 /> },
    { icon: <SkipBack />, props: { onClick: prev } },
    {
      icon: player.status === "playing" ? <Pause /> : <Play />,
      props: { onClick: toggle, isLoading: player.loading },
    },
    { icon: <SkipForward />, props: { onClick: next } },
    { icon: <Shuffle /> },
  ];

  return (
    <>
      <div className="mt-3 flex flex-col gap-1">
        <h1 className="mb-2 text-lg font-medium">{track.trackName}</h1>
        <Slider
          classNames={{ track: "bg-default-500/30" }}
          aria-label="music-progress"
          color="foreground"
          size="sm"
          minValue={0}
          maxValue={player.totalTime}
          value={Math.floor(player.currentTime)}
        />
        <div className="flex justify-between">
          <p className="text-sm">
            {formatSeconds(Math.floor(player.currentTime))}
          </p>
          <p className="text-sm text-foreground/50">
            {player.totalTime ? formatSeconds(player.totalTime) : "--:--"}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        {ActionMap.map(({ icon, props: btnProps }, i) => (
          <Button
            key={i}
            isIconOnly
            className="data-[hover]:bg-foreground/10"
            radius="full"
            variant="light"
            {...btnProps}
          >
            {icon}
          </Button>
        ))}
      </div>
    </>
  );
};
export default Controls;
