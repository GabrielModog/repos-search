import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";

import { mantineDefaultProps } from "@/styles/default-props";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider theme={{ ...mantineDefaultProps }}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
