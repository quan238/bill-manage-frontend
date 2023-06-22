import { FlexBetween, FlexBox, FlexRowCenter } from "components/Flex-box";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Flex-box",
};

type StoryFlexBoxBetween = StoryObj<typeof FlexBetween>;

export const FlexBoxBetweenDemo: StoryFlexBoxBetween = {
  args: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  render: (args) => (
    <FlexBetween {...args}>
      <span>Left</span>
      <span>Center</span>
      <span>Right</span>
    </FlexBetween>
  ),
};

export const FlexBoxDemo = () => (
  <FlexBox>
    <span>Left</span>
    <span>Center</span>
    <span>Right</span>
  </FlexBox>
);

export const FlexRowCenterDemo = () => (
  <FlexRowCenter>
    <span>Left</span>
    <span>Center</span>
    <span>Right</span>
  </FlexRowCenter>
);
