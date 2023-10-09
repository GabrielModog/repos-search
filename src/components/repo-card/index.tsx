import { Card, Badge, Title, Text, Group, Button } from "@mantine/core";

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
      <Group justify="space-between" mb="xs">
        <Title fw={500} order={3}>
          {title}
        </Title>
        {badge && (
          <Badge color="pink" variant="light">
            {badge}
          </Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed">
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
    </Card>
  );
}
