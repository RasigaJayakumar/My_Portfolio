import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import GlobalStyles from "@/styles/globalStyles";
import { lightTheme, darkTheme } from "@/styles/themes";
import Header from "@/components/header";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Header theme={theme} toggleTheme={toggleTheme} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
