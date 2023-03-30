import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'noovolari-filter',
  templateUrl: './noovolari-filter.component.html',
  styleUrls: ['./noovolari-filter.component.scss']
})
export class NoovolariFilterComponent implements OnInit {

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
      "noovolari-filter-container",
      ...this.enabled ? ["enabled"] : []
    ];
  }

  toggle(): void {
    this.enabled = !this.enabled;
  }
}
