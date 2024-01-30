import { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { NoResultsPage } from "./NoResultsPage";

const meta = {
  title: "Pages/NoResultsPage",
  component: NoResultsPage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    query: {
      control: {
        type: "text",
        describe: "Query to display",
      },
    },
  },
} satisfies Meta<typeof NoResultsPage>;

export default meta;

export const _NoResultsPage: StoryFn<ComponentProps<typeof NoResultsPage>> = (
  args
) => (
  <div className="h-[480px] w-full text-center flex flex-col items-start justify-start">
    <NoResultsPage {...args} />
  </div>
);

_NoResultsPage.args = {
  query: "Query",
};
