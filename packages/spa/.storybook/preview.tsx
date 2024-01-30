import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider {...{ theme }}>
        <Story />
      </ThemeProvider>
    ),
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default preview;
