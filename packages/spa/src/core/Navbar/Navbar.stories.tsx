import { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

import { Navbar } from "./Navbar";
import { NavbarButton } from "core/Navbar/NavbarButton";

const meta = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;

export const _Navbar: StoryFn<ComponentProps<typeof Navbar>> = (args) => (
  <div className="h-48 w-full text-center flex flex-col items-start justify-start">
    <Navbar {...args} />
  </div>
);

export const _NavbarButton: StoryFn<ComponentProps<typeof NavbarButton>> = (
  args
) => (
  <div className="h-24 w-48 p-8 text-center flex flex-col items-start justify-start bg-black">
    <NavbarButton {...args} />
  </div>
);

_NavbarButton.args = {
  path: "/",
  title: "Movies",
};
