import { Card, Flex, Badge, Title, Text, Group, Button } from "@mantine/core";

export interface RepoCardProps {
  id: string;
  title: string;
  description: string;
  onClick: () => void;
  badge?: string;
}

export default function RepoCard({
  id,
  badge,
  title,
  description,
  onClick,
}: RepoCardProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      data-testid={`repocard_${id}`}
    >
      <Flex direction="column" justify="space-between" align="center" h="100%">
        <Group justify="space-between" mb="xs">
          <Title fw={500} order={4} style={{ textAlign: "center" }}>
            {title}
          </Title>
          {badge && (
            <Badge color="pink" variant="light">
              {badge}
            </Badge>
          )}
        </Group>

        <Text size="sm" c="dimmed" style={{ textAlign: "justify" }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={onClick}
        >
          Details
        </Button>
      </Flex>
    </Card>
  );
}
