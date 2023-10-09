import { TextInput, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";

export default function SearchInput() {
  const form = useForm({
    initialValues: {
      search: "",
    },
  });
  const icon = (
    <IconSearch style={{ width: rem(18), height: rem(18) }} color="#1D72FE" />
  );
  function handleOnSubmit(values: any) {
    form.reset();
  }
  return (
    <form onSubmit={form.onSubmit(handleOnSubmit)}>
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        placeholder="Search for a repository..."
        {...form.getInputProps("search")}
      />
    </form>
  );
}
