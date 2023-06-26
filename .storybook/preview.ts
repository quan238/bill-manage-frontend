import { withConsole } from "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
