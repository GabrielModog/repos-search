import { MantineProviderProps } from "@mantine/core";

export const mantineDefaultProps: MantineProviderProps["theme"] = {
  components: {
    Button: { defaultProps: { size: "md" } },
    Input: { defaultProps: { size: "md" } },
    TextInput: { defaultProps: { size: "md" } },
    Select: { defaultProps: { size: "md" } },
    DatePicker: { defaultProps: { size: "md" } },
    Textarea: { defaultProps: { size: "md" } },
    MultiSelect: { defaultProps: { size: "md" } },
    PasswordInput: { defaultProps: { size: "md" } },
    NumberInput: { defaultProps: { size: "md" } },
  },
};
