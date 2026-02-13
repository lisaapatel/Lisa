import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ThemeWrapper } from '../components/ThemeWrapper';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Head>
          <title>Lisa Patel</title>
        </Head>
        <Component {...pageProps} />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
