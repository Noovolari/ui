import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {addons} from "@storybook/addons";
import noovolariTheme from "./noovolariTheme";
setCompodocJson(docJson);

addons.setConfig({
  theme: noovolariTheme,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },

}
