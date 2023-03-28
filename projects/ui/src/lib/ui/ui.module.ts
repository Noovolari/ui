import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./component/button/button.component";
import { NoovolariButtonComponent } from './component/noovolari-button/noovolari-button.component';
import { NoovolariFilterComponent } from './component/noovolari-filter/noovolari-filter.component';


@NgModule({
  declarations: [ButtonComponent, NoovolariButtonComponent, NoovolariFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, NoovolariButtonComponent, NoovolariFilterComponent]
})
export class UiModule { }
