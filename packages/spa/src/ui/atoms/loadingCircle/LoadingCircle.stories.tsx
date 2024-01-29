import type { Meta, StoryFn } from "@storybook/react";

import { LoadingCircle } from "./LoadingCircle";
import { ComponentProps } from "react";

const meta = {
  title: "Atoms/LoadingCircle",
  component: LoadingCircle,
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
} satisfies Meta<typeof LoadingCircle>;

export default meta;

const Template: StoryFn<ComponentProps<typeof LoadingCircle>> = (args) => (
  <div className="h-48 text-center w-full">
    <LoadingCircle {...args} />
  </div>
);

export const _LoadingCircle = Template.bind({});
_LoadingCircle.args = {
  color: "current",
};
