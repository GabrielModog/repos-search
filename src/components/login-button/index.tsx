import { Button, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export default function LoginButton() {
  return (
    <Button variant="transparent" px="sm">
      <IconBrandGithub size={20} />
      <Text fw={600} size="sm" ml="xs">
        Login With Github
      </Text>
    </Button>
  );
}
