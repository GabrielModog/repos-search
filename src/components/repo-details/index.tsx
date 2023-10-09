import { Flex, Text, Badge, Group } from "@mantine/core";
import dayjs from "dayjs";
import { IconGitFork, IconCalendar, IconLink } from "@tabler/icons-react";
import { RepoDetailsObject } from "@/types";

export interface RepoDetailsProps {
  repo: RepoDetailsObject;
}

export default function RepoDetails({ repo }: RepoDetailsProps) {
  return (
    <Flex direction="column" py={4} data-testid={`details_${repo.id}`}>
      <Group>
        <IconGitFork size={18} />{" "}
        <Text my={6} size="sm" data-testid="details-fork">
          Forks: {repo.forks}
        </Text>
      </Group>
      <Group>
        <IconCalendar size={18} />
        <Text my={6} size="sm" data-testid="details-date">
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
