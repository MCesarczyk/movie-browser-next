import type { Meta, StoryFn } from "@storybook/react";

import { LoadingBar } from "./LoadingBar";
import { ComponentProps } from "react";

const meta = {
  title: "Atoms/LoadingBar",
  component: LoadingBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    color: {
      control: {
        type: "text",
        describe: "Color of the element",
      },
    },
  },
} satisfies Meta<typeof LoadingBar>;

export default meta;

const Template: StoryFn<ComponentProps<typeof LoadingBar>> = (args) => (
  <div style={{ width: "100%", height: "200px" }}>
    <div style={{ height: "100px" }} />
    <LoadingBar {...args} />
  </div>
);

export const _LoadingBar = Template.bind({});
_LoadingBar.args = {
  color: "blue-800",
};
