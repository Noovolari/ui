// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { NoovolariChipComponent } from "./noovolari-chip.component";
import { Meta, StoryObj } from "@storybook/angular";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Component/NoovolariChip',
  component: NoovolariChipComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
  },
  excludeStories: /.*Data$/,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
type Story = StoryObj<NoovolariChipComponent>;

export const DefaultSize: Story = {
  args: {
    label: "label",
    removable: true,
    iconId: "house"
  }
};
