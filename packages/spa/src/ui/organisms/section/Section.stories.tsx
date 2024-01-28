import type { Meta, StoryFn } from "@storybook/react";

import Section from "./Section";
import { ComponentProps } from "react";

const meta = {
  title: "Organisms/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
        describe: "Title of the section",
      },
    },
    children: {
      control: {
        type: "disabled",
        describe: "Content of the section",
      },
    },
    isStale: {
      control: {
        type: "boolean",
        describe: "Whether the section is stale",
      },
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

const Template: StoryFn<ComponentProps<typeof Section>> = (args) => (
  <Section {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    voluptatum.
  </Section>
);

export const _Section = Template.bind({});
_Section.args = {
  title: "Section Title",
  isStale: false,
};
