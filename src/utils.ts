import Color from "color";
import dayjs from "dayjs";

export const formatSeconds = (seconds: number) =>
  dayjs.duration(seconds, "seconds").format("mm:ss");

export const getColor = (color: string) => Color(color);

export const hexToRgb = (hex: string) =>
  Color(hex).darken(0.3).rgb().array().join(",");
