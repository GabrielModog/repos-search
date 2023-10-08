import { AppShell, Group } from "@mantine/core";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          Navbar
        </Group>
      </AppShell.Header>
      <AppShell.Main>Content</AppShell.Main>
    </AppShell>
  );
}
