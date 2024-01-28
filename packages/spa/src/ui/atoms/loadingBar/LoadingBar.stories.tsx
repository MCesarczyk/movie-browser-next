import type { Meta, StoryFn } from "@storybook/react";

import { LoadingBar } from "./LoadingBar";

const meta = {
  title: "Atoms/LoadingBar",
  component: LoadingBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof LoadingBar>;

export default meta;

const Template: StoryFn<typeof meta> = (args) => <div style={{width:'100%',height:'200px'}}><div style={{height:'100px'}}/><LoadingBar /></div>;

export const _LoadingBar = Template.bind({});
