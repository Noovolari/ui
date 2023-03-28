import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'noovolari-filter',
  templateUrl: './noovolari-filter.component.html',
  styleUrls: ['./noovolari-filter.component.scss']
})
export class NoovolariFilterComponent implements OnInit {

  @Input()
  label = "label";

  @Input()
  removable = false;

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
