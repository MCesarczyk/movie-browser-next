import { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { LoadingPage } from "./LoadingPage";

const meta = {
  title: "Pages/LoadingPage",
  component: LoadingPage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
        describe: "Message to display",
      },
    },
    query: {
      control: {
        type: "text",
        describe: "Query to display",
      },
    },
  },
} satisfies Meta<typeof LoadingPage>;

export default meta;

export const _LoadingPage: StoryFn<ComponentProps<typeof LoadingPage>> = (args) => (
  <div className="h-[480px] w-full text-center flex flex-col items-start justify-start">
    <LoadingPage {...args} />
  </div>
);

_LoadingPage.args = {
  message: "Loading...",
  query: "Query",
};
