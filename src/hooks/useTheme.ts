import { useCallback, useEffect } from "react";

const useTheme = () => {
  const setMode = useCallback((mode: "dark" | "light") => {
    const body = document.body;
    body.classList.toggle("dark", mode === "dark");
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    setMode(mql.matches ? "dark" : "light");

    function matchMode(e: MediaQueryListEvent) {
      setMode(e.matches ? "dark" : "light");
    }
    mql.addEventListener("change", matchMode);
    return () => mql.removeEventListener("change", matchMode);
  }, []);
};
export default useTheme;
