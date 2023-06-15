import { SignInComponent } from "./sign-in.component";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { NoovolariButtonComponent } from "../../component/noovolari-button/noovolari-button.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Composite/SignIn',
  component: SignInComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [NoovolariButtonComponent],
      imports: [CommonModule, BrowserAnimationsModule, ButtonModule, RippleModule, InputTextModule, CheckboxModule],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
type Story = StoryObj<SignInComponent>;

export const DefaultSize: Story = {
  args: {}
};
