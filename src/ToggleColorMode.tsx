import { createTheme, Paper, Switch, ThemeProvider } from "@mui/material";
import React, { useMemo, FC } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const ToggleColorMode: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorage<"light" | "dark">(
    "colorMode",
    "light"
  );
  const toggleColorMode = () =>
    mode === "light" ? setMode("dark") : setMode("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "100vh", width: "100vw" }}>
        <Switch checked={mode === "light"} onChange={toggleColorMode} />
        {children}
      </Paper>
    </ThemeProvider>
  );
};
