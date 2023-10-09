import { AppShell, Group, Flex, Container } from "@mantine/core";

import SearchForm from "@/components/search-form";
import LoginButton from "@/components/login-button";

export default function Home() {
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
        <Container>
          <SearchForm />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
