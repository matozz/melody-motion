import Background from "@/components/Background";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import ModeSwitch from "@/components/ModeSwtich";
import { MusicPlayer } from "@/components/Player";
import { getBackgroundColors } from "@/utils";

// import useTheme from "./hooks/useTheme";

function App() {
  // useTheme();

  const colorProps = getBackgroundColors("#3F6671");

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
