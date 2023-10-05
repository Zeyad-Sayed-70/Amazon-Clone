// app/_app.tsx
import { theme } from "@/style/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// Define your custom page props type
interface CustomPageProps {
  // Your props
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  console.log("hello app");
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
}

export default MyApp;
