import { useAtomValue } from "jotai";

import { Image } from "@nextui-org/image";

import { trackAtom } from "@/controls/Player/state";

const CoverImage = () => {
  const track = useAtomValue(trackAtom);

  return (
    <Image
      isZoomed
      isBlurred
      shadow="lg"
      classNames={{
        zoomedWrapper: "m-auto w-fit",
        wrapper:
          "w-full h-fit shadow-none !max-w-full flex-1 bg-background/30 [&::after]:bg-background/30 [&::before]:border-none md:!max-w-fit",
        img: "max-h-60 md:max-h-44 w-60 md:h-44 md:w-44 shadow-black/20",
      }}
      src={track.albumUrl}
    />
  );
};
export default CoverImage;
