import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { NoovolariButtonComponent } from './component/noovolari-button/noovolari-button.component';
import { NoovolariChipComponent } from './component/noovolari-chip/noovolari-chip.component';
import { NoovolariFilterComponent } from './composite/noovolari-filter/noovolari-filter.component';

import { ButtonComponent } from "./component/button/button.component";

@NgModule({
  declarations: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent],
  imports: [CommonModule, BrowserAnimationsModule, ButtonModule],
  exports: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent]
})
export class UiModule {}
