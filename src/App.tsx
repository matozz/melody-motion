import Background from "@/components/Background";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import ModeSwitch from "@/components/ModeSwtich";
import { MusicPlayer } from "@/components/Player";
import { getColor, hexToRgb } from "@/utils";

// import useTheme from "./hooks/useTheme";

function App() {
  // useTheme();

  return (
    <Background
      gradientBackgroundStart={getColor("#354a55").darken(0.3).hex()}
      gradientBackgroundEnd={getColor("#1c2830").darken(0.3).hex()}
      firstColor={hexToRgb("#406a7a")}
      secondColor={hexToRgb("#97bfc9")}
      thirdColor={hexToRgb("#4b8191")}
      fourthColor={hexToRgb("#1c2830")}
      fifthColor={hexToRgb("#395765")}
      pointerColor={hexToRgb("#c2dadf")}
    >
      <Layout>
        <Card header={<ModeSwitch />}>
          <MusicPlayer />
        </Card>
      </Layout>
    </Background>
  );
}

export default App;
