import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./component/button/button.component";
import { InputFieldComponent } from './component/input-field/input-field.component';

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent]
})
export class UiModule { }
