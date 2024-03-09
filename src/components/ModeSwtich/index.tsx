import { FC } from "react";

import { Settings } from "lucide-react";

import { Button } from "@nextui-org/button";
import { Tab, Tabs } from "@nextui-org/tabs";

const ModeSwitch: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Tabs
        radius="lg"
        classNames={{
          tab: "[&[data-selected=true]>span]:bg-black/30 [&:not([data-selected])>div]:text-foreground/50",
          tabList: "glassmorphism",
        }}
      >
        <Tab key="chill" title="Chill" />
        <Tab key="workout" title="Workout" />
        <Tab key="gaming" title="Gaming" />
      </Tabs>
      <Button isIconOnly radius="lg" className="glassmorphism">
        <Settings size={18} />
      </Button>
    </div>
  );
};
export default ModeSwitch;
