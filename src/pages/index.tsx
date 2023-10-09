import { AppShell, Group, Container } from "@mantine/core";

import SearchInput from "@/components/search-input";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          Navbar
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <SearchInput />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
