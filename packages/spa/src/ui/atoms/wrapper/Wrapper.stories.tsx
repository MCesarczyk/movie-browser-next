import type { Meta, StoryFn } from "@storybook/react";

import { Wrapper } from "./Wrapper";

const meta = {
  title: "Atoms/Wrapper",
  component: Wrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

const Template: StoryFn<typeof meta> = (args) => (
  <Wrapper>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    voluptatum.
  </Wrapper>
);

export const _Wrapper = Template.bind({});
