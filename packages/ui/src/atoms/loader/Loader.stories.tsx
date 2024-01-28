import type { Meta, StoryFn } from "@storybook/react";

import { Loader } from "./Loader";
import styled from "styled-components";

const meta = {
  title: "Example/Loader",
  component: Loader,
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
    cycleTime: {
      control: {
        type: "number",
        describe: "Time it takes for the loader to complete one cycle",
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

const Template: StoryFn<typeof meta> = (args) => (
  <Wrapper>
    <Loader {...args} />
  </Wrapper>
);

export const _Loader = Template.bind({});

const Wrapper = styled.div`
  height: 200px;
`;
