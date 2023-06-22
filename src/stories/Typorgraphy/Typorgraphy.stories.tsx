import { H1, H2 } from "components/Typography";
import type { StoryObj } from "@storybook/react";
import React from "react";

export default {
  title: "Typorgraphy",
};

type StoryH1 = StoryObj<typeof H1>;

export const Heading: StoryH1 = {
  args: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  argTypes: {
    textAlign: {
      options: ["center", "left", "right"],
      control: { type: "radio" },
    },
    textTransform: {
      options: ["uppercase", "capitalize", "lowercase"],
      control: { type: "select" },
    },
  },
  render: (args) => <H1 {...args}>H1 Tag</H1>,
};

export const SecondHeading = () => <H2>H2 Tag</H2>;
