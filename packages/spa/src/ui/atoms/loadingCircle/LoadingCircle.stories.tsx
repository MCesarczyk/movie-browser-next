import type { Meta, StoryFn } from "@storybook/react";

import { LoadingCircle } from "./LoadingCircle";
import styled from "styled-components";

const meta = {
  title: "Example/LoadingCircle",
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
    cycleTime: {
      control: {
        type: "number",
        describe: "Time it takes for the loader to complete one cycle",
      },
    },
  },
} satisfies Meta<typeof LoadingCircle>;

export default meta;

const Template: StoryFn<typeof meta> = (args) => (
  <Wrapper>
    <LoadingCircle {...args} />
  </Wrapper>
);

export const _LoadingCircle = Template.bind({});

const Wrapper = styled.div`
  height: 200px;
`;
