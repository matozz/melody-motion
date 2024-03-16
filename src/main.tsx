import ReactDOM from "react-dom/client";

import dayjs from "dayjs";

import { NextUIProvider } from "@nextui-org/system";
import duration from "dayjs/plugin/duration";

import App from "./App.tsx";

import "./index.css";

dayjs.extend(duration);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>,
);
