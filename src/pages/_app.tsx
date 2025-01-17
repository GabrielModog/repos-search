import "@mantine/core/styles.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ModalsProvider } from "@mantine/modals";

import ThemeProvider from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Repos Search App</title>
        <meta
          name="description"
          content="An app to search for repositories in github"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <SessionProvider>
          <ModalsProvider>
            <Component {...pageProps} />
          </ModalsProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
