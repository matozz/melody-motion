import Background from "@/components/Background";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

import ModeSwitch from "./components/ModeSwtich";
import { MusicPlayer } from "./components/Player";
import useTheme from "./hooks/useTheme";

function App() {
  // useTheme();

  return (
    <Background>
      <Layout>
        <Card header={<ModeSwitch />}>
          <MusicPlayer />
        </Card>
      </Layout>
    </Background>
  );
}

export default App;
