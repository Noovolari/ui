import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./component/button/button.component";
import { NoovolariButtonComponent } from './component/noovolari-button/noovolari-button.component';
import { NoovolariChipComponent } from './component/noovolari-chip/noovolari-chip.component';
import { NoovolariFilterComponent } from './composite/noovolari-filter/noovolari-filter.component';
import { MatMenuModule } from "@angular/material/menu";


@NgModule({
  declarations: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent]
})
export class UiModule { }
