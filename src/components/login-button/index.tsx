import { Button, Text, Group } from "@mantine/core";
import { IconBrandGithub, IconLogout } from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Group>
        <Text>
          Welcome,{" "}
          <Text c="blue" span>
            {session?.user?.name}
          </Text>{" "}
          <br />
        </Text>
        <Button size="sm" onClick={() => signOut()}>
          <IconLogout size={18} />
          <Text ml={4} size="sm">
            Sign out
          </Text>
        </Button>
      </Group>
    );
  }

  return (
    <Button variant="transparent" px="sm" onClick={() => signIn()}>
      <IconBrandGithub size={20} />
      <Text fw={600} size="sm" ml="xs">
        Login With Github
      </Text>
    </Button>
  );
}
