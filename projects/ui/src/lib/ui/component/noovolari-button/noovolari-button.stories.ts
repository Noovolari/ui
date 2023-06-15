// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { NoovolariButtonComponent } from './noovolari-button.component';
import { Meta, StoryObj } from "@storybook/angular";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Component/NoovolariButton',
  component: NoovolariButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  excludeStories: /.*Data$/,
} as Meta;


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
type Story = StoryObj<NoovolariButtonComponent>;

export const DefaultSize: Story = {
  args: {
    fullSize: false,
    primary: true,
    label: 'Click me!',
  }
};

export const FullSize: Story = {
  args: {
    fullSize: true,
    primary: true,
    label: 'Click me!'
  }
};

export const Secondary: Story = {
  args: {
    fullSize: false,
    primary: false,
    label: 'Click me!'
  }
};

export const Disabled: Story = {
  args: {
    fullSize: false,
    disabled: true,
    label: 'Click me!'
  }
};

export const Critical: Story = {
  args: {
    fullSize: false,
    primary: true,
    critical: true,
    label: 'Click me!'
  }
};

export const CriticalSecondary: Story = {
  args: {
    fullSize: false,
    primary: false,
    critical: true,
    label: 'Click me!'
  }
};
