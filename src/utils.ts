import Color from "color";
import dayjs from "dayjs";

import { BackgroundProps } from "./components/Background";

export const formatSeconds = (seconds: number) =>
  dayjs.duration(seconds, "seconds").format("mm:ss");

export const hexToRgb = (hex: string) =>
  Color(hex).darken(0.3).rgb().array().join(",");

export const generateColorPalette = (
  baseColor: string,
  numberOfShades: number,
) => {
  const color = Color(baseColor);
  const shades: string[] = [];

  const lightnessIncrement = 50 / (numberOfShades + 1);

  for (let i = 1; i <= numberOfShades; i++) {
    const lightness = lightnessIncrement * i;
    const shadeColor = color.lightness(lightness).darken(0.3).hex();
    shades.push(shadeColor);
  }

  return shades;
};

export const getBackgroundColors = (
  color: string,
): Pick<
  BackgroundProps,
  | "gradientBackgroundStart"
  | "gradientBackgroundEnd"
  | "firstColor"
  | "secondColor"
  | "thirdColor"
  | "fourthColor"
  | "fifthColor"
  | "pointerColor"
> => {
  const colors = generateColorPalette(color, 8);

  return {
    gradientBackgroundStart: colors[0],
    gradientBackgroundEnd: colors[7],
    firstColor: hexToRgb(colors[1]),
    secondColor: hexToRgb(colors[2]),
    thirdColor: hexToRgb(colors[3]),
    fourthColor: hexToRgb(colors[5]),
    fifthColor: hexToRgb(colors[6]),
    pointerColor: hexToRgb(colors[4]),
  };
};
