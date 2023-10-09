import { useReposStore } from "@/store/repos";
import { Loader, Flex, SimpleGrid } from "@mantine/core";
import { modals } from "@mantine/modals";

import RepoDetails from "@/components/repo-details";
import RepoCard from "@/components/repo-card";

export default function ListRepos() {
  const { repos, status } = useReposStore();
  function handleOpenDetails(id?: number) {
    const repoDetails = repos.find((item) => item.id === id);

    return modals.open({
      title: repoDetails?.full_name,
      children: <RepoDetails repo={repoDetails} />,
    });
  }

  if (status === "LOADING") {
    return (
      <Flex align="center" justify="center" h="50vh">
        <Loader size={42} />
      </Flex>
    );
  }

  return (
    <>
      {status === "SUCCESS" && (
        <SimpleGrid cols={3}>
          {repos &&
            repos.map((item) => (
              <RepoCard
                key={item.id}
                id={item.id}
                title={item.full_name}
                description={item.description}
                onClick={handleOpenDetails}
              />
            ))}
        </SimpleGrid>
      )}
    </>
  );
}
