import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

import { NoovolariButtonComponent } from './component/noovolari-button/noovolari-button.component';
import { NoovolariChipComponent } from './component/noovolari-chip/noovolari-chip.component';
import { NoovolariFilterComponent } from './composite/noovolari-filter/noovolari-filter.component';

import { ButtonComponent } from "./component/button/button.component";
import { SignInComponent } from "./composite/sign-in/sign-in.component";

@NgModule({
  declarations: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent, SignInComponent],
  imports: [CommonModule, BrowserAnimationsModule, ButtonModule, RippleModule, InputTextModule, CheckboxModule],
  exports: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent]
})
export class UiModule {}
