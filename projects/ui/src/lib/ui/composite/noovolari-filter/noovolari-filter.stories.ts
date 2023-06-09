// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { NoovolariFilterComponent } from "./noovolari-filter.component";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoovolariChipComponent } from "../../component/noovolari-chip/noovolari-chip.component";
import { NoovolariButtonComponent } from "../../component/noovolari-button/noovolari-button.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Composite/NoovolariFilter',
  component: NoovolariFilterComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [NoovolariChipComponent, NoovolariButtonComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
type Story = StoryObj<NoovolariFilterComponent>;

export const DefaultSize: Story = {
  args: {}
};
