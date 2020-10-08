import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { addDecorator } from "@storybook/react";

import theme from "../theme";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
