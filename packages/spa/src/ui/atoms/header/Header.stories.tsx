import type { Meta, StoryFn } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "Atoms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

const Template: StoryFn<typeof meta> = (args) => (
  <Header>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    voluptatum.
  </Header>
);

export const _Header = Template.bind({});
