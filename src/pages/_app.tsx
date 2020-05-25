import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../theme";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
