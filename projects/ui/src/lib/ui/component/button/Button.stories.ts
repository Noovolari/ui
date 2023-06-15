// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { ButtonComponent } from './button.component';
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { ButtonModule } from "primeng/button";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
  }
};
