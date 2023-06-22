import { StoryObj } from "@storybook/react";
import SearchInput from "components/SearchInput/SearchInput";

export default {
  title: "Form/SearchInput",
};

type SearchInputStory = StoryObj<typeof SearchInput>;

export const SearchInputDemo: SearchInputStory = {
  args: {
    disabled: false,
    error: true,
    fullWidth: true,
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: "boolean",
    },
    error: {
      options: [true, false],
      control: "boolean",
    },
  },
  render: (args) => <SearchInput {...args} />,
};
