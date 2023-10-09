import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

import { mantineDefaultProps } from "@/styles/default-props";

export interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider theme={{ ...mantineDefaultProps }}>
      {children}
    </MantineProvider>
  );
}
