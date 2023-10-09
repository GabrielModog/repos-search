import { Flex, Text, Badge, Group } from "@mantine/core";
import dayjs from "dayjs";
import { IconGitFork, IconCalendar, IconLink } from "@tabler/icons-react";

export interface RepoDetailsProps {
  repo: any;
}

export default function RepoDetails({ repo }: RepoDetailsProps) {
  return (
    <Flex direction="column" py={4}>
      <Group>
        <IconGitFork size={18} />{" "}
        <Text my={6} size="sm">
          Forks: {repo.forks}
        </Text>
      </Group>
      <Group>
        <IconCalendar size={18} />
        <Text my={6} size="sm">
          Created at: {dayjs(repo.created_at).format("HH:mm - MM/DD/YYYY")}
        </Text>
      </Group>

      <Group>
        <IconLink size={18} />
        <Text my={6} size="sm">
          Link: {repo.git_url}
        </Text>
      </Group>
      <Group dir="row" my={6}>
        {repo.language && <Badge>{repo.language}</Badge>}
        <Badge bg="yellow">{repo.visibility}</Badge>
      </Group>
    </Flex>
  );
}
