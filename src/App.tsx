import { useAtomValue } from "jotai";

import Background from "@/components/Background";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import ModeSwitch from "@/components/ModeSwtich";
import { MusicPlayer } from "@/components/Player";
import { getBackgroundColors } from "@/utils";

import { trackAtom } from "./controls/Player/state";

function App() {
  const track = useAtomValue(trackAtom);
  const colorProps = getBackgroundColors(track.themeColor[0]);

  return (
    <Background {...colorProps}>
      <Layout>
        <Card header={<ModeSwitch />}>
          <MusicPlayer />
        </Card>
      </Layout>
    </Background>
  );
}

export default App;
