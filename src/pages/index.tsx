import {
  AppShell,
  Loader,
  Group,
  Flex,
  Container,
  SimpleGrid,
} from "@mantine/core";

import SearchForm from "@/components/search-form";
import LoginButton from "@/components/login-button";
import { useReposStore } from "@/store/repos";
import RepoCard from "@/components/repo-card";

export default function Home() {
  const { repos, status } = useReposStore();
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
          {status === "LOADING" && (
            <Flex justify="center" align="center" h="50vh">
              <Loader size={42} />
            </Flex>
          )}
          {status === "SUCCESS" && (
            <SimpleGrid cols={3}>
              {repos &&
                repos.map((item) => (
                  <RepoCard
                    id={item.id}
                    title={item.full_name}
                    description={item.description}
                    onClick={() => {}}
                  />
                ))}
            </SimpleGrid>
          )}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
