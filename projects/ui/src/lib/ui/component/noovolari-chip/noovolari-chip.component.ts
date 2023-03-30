import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'noovolari-chip',
  templateUrl: './noovolari-chip.component.html',
  styleUrls: ['./noovolari-chip.component.scss']
})
export class NoovolariChipComponent implements OnInit {

  /**
   * Text written in the filter
   */
  @Input()
  label = "label";

  /**
   * Chose an icon at https://phosphoricons.com/
   */
  @Input()
  iconId = "house";

  /**
   * The filter can be removed clicking on a button
   */
  @Input()
  removable = true;

  enabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    return [
      "noovolari-chip-container",
      ...this.enabled ? ["enabled"] : []
    ];
  }

  toggle(): void {
    this.enabled = !this.enabled;
  }
}
