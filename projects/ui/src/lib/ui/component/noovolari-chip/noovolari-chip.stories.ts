// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from "@storybook/addon-actions";
import { NoovolariChipComponent } from "./noovolari-chip.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Component/NoovolariChip',
  component: NoovolariChipComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onClick: action("onClick")
}

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NoovolariChipComponent> = (args: NoovolariChipComponent) => ({
  props: {
    ...args,
  },
});

export const DefaultSize = Template.bind({});
DefaultSize.args = {
  label: "label",
  removable: true,
  iconId: "house"
};
