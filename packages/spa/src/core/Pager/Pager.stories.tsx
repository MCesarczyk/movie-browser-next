import { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { Pager } from "./Pager";

const meta = {
  title: "Organisms/Pager",
  component: Pager,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Pager>;

export default meta;

export const _Pager: StoryFn<ComponentProps<typeof Pager>> = (args) => (
  <div className="h-48 w-full text-center flex flex-col items-start justify-start">
    <Pager {...args} />
  </div>
);
