import { ReactNode } from "react";
import { AppShell, Group, Flex, Container } from "@mantine/core";

import LoginButton from "@/components/login-button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container h="100%">
          <Flex direction="row" justify="end" align="center" h="100%">
            <Group px="md">
              <LoginButton />
            </Group>
          </Flex>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
