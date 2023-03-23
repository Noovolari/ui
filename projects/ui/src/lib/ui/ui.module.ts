import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./component/button/button.component";
import { InputFieldComponent } from './component/input-field/input-field.component';
import { NoovolariButtonComponent } from './component/noovolari-button/noovolari-button.component';
import { NoovolariFilterComponent } from './component/noovolari-filter/noovolari-filter.component';
import { TestoneComponent } from './component/testone/testone.component';

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent, NoovolariButtonComponent, NoovolariFilterComponent, TestoneComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent]
})
export class UiModule { }
