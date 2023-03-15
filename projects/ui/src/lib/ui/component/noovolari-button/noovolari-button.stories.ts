// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NoovolariButtonComponent } from './noovolari-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Component/NoovolariButton',
  component: NoovolariButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NoovolariButtonComponent> = (args: NoovolariButtonComponent) => ({
  props: args,
});

export const DefaultSize = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
DefaultSize.args = {
  fullSize: false,
  primary: true
};

export const FullSize = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
FullSize.args = {
  fullSize: true,
  primary: true
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Secondary.args = {
  fullSize: false,
  primary: false
};
