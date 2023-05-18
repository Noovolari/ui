import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from "./component/button/button.component";
import { NoovolariButtonComponent } from './component/noovolari-button/noovolari-button.component';
import { NoovolariChipComponent } from './component/noovolari-chip/noovolari-chip.component';
import { NoovolariFilterComponent } from './composite/noovolari-filter/noovolari-filter.component';
// import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [ButtonComponent, NoovolariButtonComponent, NoovolariChipComponent, NoovolariFilterComponent]
})
export class UiModule {}
