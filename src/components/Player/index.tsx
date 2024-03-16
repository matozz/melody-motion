import { FC } from "react";

import { Card, CardBody, CardProps } from "@nextui-org/card";
import { cn } from "@nextui-org/system";

import { usePlayerControl } from "@/controls/Player/control";

import Controls from "./Controls";
import CoverImage from "./CoverImage";
import TrackInfo from "./TrackInfo";

export interface MusicPlayerProps extends CardProps {
  className?: string;
}

export const MusicPlayer: FC<MusicPlayerProps> = ({
  className,
  ...otherProps
}) => {
  const controller = usePlayerControl();
  return (
    <Card
      className={cn("h-full w-full border-none bg-transparent", className)}
      radius="none"
      shadow="none"
      {...otherProps}
    >
      <CardBody className="overflow-hidden p-6">
        <div className="flex h-full flex-row flex-wrap items-center justify-center gap-6 sm:h-full md:h-auto md:flex-row">
          <CoverImage />
          <div className="flex w-full min-w-full flex-1 flex-col justify-between sm:h-auto md:h-full md:min-w-fit">
            <TrackInfo />
            <Controls controller={controller} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
