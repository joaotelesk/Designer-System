import { themes } from "@storybook/theming";
import "../src/styles/global.css";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize({
  onUnhandledRequest: "bypass",
});

export const decorator = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
