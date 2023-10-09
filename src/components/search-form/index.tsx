import { useSession } from "next-auth/react";
import { TextInput, Title, Flex, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";

import { useReposStore } from "@/store/repos";
import useOcktokit from "@/hooks/useOctokit";

export default function SearchForm() {
  const { setRepos, setStatus, status } = useReposStore();
  const { searchRepository } = useOcktokit();
  const { data: session } = useSession();
  const form = useForm({
    initialValues: {
      search: "",
    },
  });
  const icon = (
    <IconSearch
      style={{ width: rem(18), height: rem(18) }}
      color={!session || status === "LOADING" ? "#c1c1c1" : "#1D72FE"}
    />
  );
  async function handleOnSubmit(values: any) {
    try {
      setStatus("LOADING");
      const result = await searchRepository(values.search);
      setRepos(result.data.items);
      setStatus("SUCCESS");
    } catch {
      setStatus("ERROR");
    } finally {
      form.reset();
    }
  }
  return (
    <form onSubmit={form.onSubmit(handleOnSubmit)}>
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        placeholder="Search for a repository..."
        disabled={!session || status === "LOADING"}
        {...form.getInputProps("search")}
      />
      <Flex mt="md" direction="column" justify="center" align="center">
        {!session && (
          <Title order={4} size="h3" c="gray">
            You have to log in to use the search repository.
          </Title>
        )}
      </Flex>
    </form>
  );
}
