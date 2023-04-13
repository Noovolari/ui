// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NoovolariFilterComponent } from "./noovolari-filter.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { NoovolariChipComponent } from "../../component/noovolari-chip/noovolari-chip.component";
import { MatMenu } from "@angular/material/menu";
import { NoovolariButtonComponent } from "../../component/noovolari-button/noovolari-button.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Composite/NoovolariFilter',
  component: NoovolariFilterComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [NoovolariChipComponent, MatMenu, NoovolariButtonComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NoovolariFilterComponent> = (args: NoovolariFilterComponent) => ({
  props: {
    ...args,
  },
});

export const DefaultSize = Template.bind({});
DefaultSize.args = {};