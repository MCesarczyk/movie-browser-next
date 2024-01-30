import { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { ErrorPage } from "./ErrorPage";
import { Fallback } from "core/CorePage/ErrorPage/Fallback";

const meta = {
  title: "Pages/ErrorPage",
  component: ErrorPage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    error: {
      control: {
        type: "text",
        describe: "Message to display",
      },
    },
  },
} satisfies Meta<typeof ErrorPage>;

export default meta;

export const _ErrorPage: StoryFn<ComponentProps<typeof ErrorPage>> = (args) => (
  <div className="h-[480px] w-full text-center flex flex-col items-start justify-start">
    <ErrorPage {...args} />
  </div>
);

_ErrorPage.args = {
  error: {
    name: "Error",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
};

export const _Fallback: StoryFn<ComponentProps<typeof Fallback>> = (args) => (
  <div className="h-[480px] w-full text-center flex flex-col items-start justify-start">
    <Fallback {...args} />
  </div>
);

_Fallback.args = {};
