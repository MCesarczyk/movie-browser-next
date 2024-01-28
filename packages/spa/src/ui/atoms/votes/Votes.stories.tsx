import type { Meta, StoryFn } from "@storybook/react";

import { Votes } from "./Votes";
import styled from "styled-components";
import { ComponentProps } from "react";

const meta = {
  title: "Atoms/Votes",
  component: Votes,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    votes: {
      control: {
        type: "number",
        describe: "Number of votes",
      },
    },
    rating: {
      control: {
        type: "number",
        describe: "Rating",
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["DEFAULT", "BACKDROP"],
        describe: "Backdrop variant",
      },
    },
  },
} satisfies Meta<typeof Votes>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Votes>> = (args) => (
  <Wrapper>
    <Votes {...args} />
  </Wrapper>
);

export const _Votes = Template.bind({});
_Votes.args = {
  votes: 100,
  rating: 5,
  variant: "DEFAULT",
};

const Wrapper = styled.div`
  height: 200px;
`;
