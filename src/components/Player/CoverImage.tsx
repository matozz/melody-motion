import { useEffect, useState } from "react";

import { useAtomValue } from "jotai";

import { Image } from "@nextui-org/image";

import { trackAtom } from "@/controls/Player/state";
import { supabase } from "@/supabase";

const CoverImage = () => {
  const track = useAtomValue(trackAtom);

  const [imageBlobUrl, setImageBlobUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (track.albumPath) {
      setIsLoading(true);
      supabase.storage
        .from("assets")
        .download(track.albumPath)
        .then((response) => response.data)
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          setImageBlobUrl(blobUrl);
          return () => URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => console.error("Image fetch error:", error))
        .finally(() => setIsLoading(false));
    }
  }, [track.albumPath]);

  return (
    <Image
      isZoomed
      isBlurred
      isLoading={isLoading}
      shadow="lg"
      classNames={{
        zoomedWrapper: "m-auto w-fit",
        wrapper:
          "w-full h-fit shadow-none !max-w-full flex-1 bg-transparent [&::after]:bg-background/40 [&::before]:border-none md:!max-w-fit",
        img: "max-h-60 md:max-h-44 w-60 md:h-44 md:w-44 shadow-black/20",
      }}
      src={imageBlobUrl}
    />
  );
};
export default CoverImage;
