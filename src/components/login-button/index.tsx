import { Button, Text, Group, Flex, Paper, Image } from "@mantine/core";
import { IconBrandGithub, IconLogout } from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Group>
        <Flex direction="row" justify="space-between" align="center" mr={14}>
          {session?.user?.image && (
            <Paper mr="sm" radius="100%" style={{ overflow: "hidden" }} w={36}>
              <Image
                src={session?.user?.image}
                alt={session?.user?.name ?? ""}
              />
            </Paper>
          )}
          <Text c="blue" span>
            {session?.user?.name}
          </Text>{" "}
        </Flex>

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
