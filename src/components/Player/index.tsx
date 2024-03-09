import { FC, MouseEventHandler } from "react";

import confetti from "canvas-confetti";
import { Heart, Play, Repeat1, Shuffle, SkipBack } from "lucide-react";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardProps } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Progress } from "@nextui-org/progress";
import { cn } from "@nextui-org/system";

export interface MusicPlayerProps extends CardProps {
  className?: string;
}

export const MusicPlayer: FC<MusicPlayerProps> = ({
  className,
  ...otherProps
}) => {
  const handleLike: MouseEventHandler<HTMLButtonElement> = (e) =>
    confetti({
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight - 0.05,
      },
    });

  return (
    <Card
      className={cn("h-full w-full border-none bg-transparent", className)}
      radius="none"
      shadow="none"
      {...otherProps}
    >
      <CardBody className="overflow-hidden p-6">
        <div className="flex h-full flex-row flex-wrap items-center justify-center gap-6 sm:h-full md:h-auto md:flex-row">
          <Image
            isZoomed
            shadow="lg"
            className="object-cover"
            classNames={{
              wrapper:
                "w-full h-fit flex-1 bg-background/30 [&::after]:bg-background/30",
              img: "max-h-60 md:max-h-44 h-60 w-60 md:h-44 md:w-44 shadow-black/20",
            }}
            src={
              "https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=640&q=75"
            }
          />

          <div className="flex w-full min-w-full flex-1 flex-col justify-between sm:h-auto md:h-full md:min-w-fit">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-sm text-foreground/80">12 Tracks</p>
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

            <div className="mt-3 flex flex-col gap-1">
              <h1 className="mb-2 text-lg font-medium">Frontend Radio</h1>
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={33}
              />
              <div className="flex justify-between">
                <p className="text-sm">1:23</p>
                <p className="text-sm text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Repeat1 />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <SkipBack />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Play />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <SkipBack />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <Shuffle />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
