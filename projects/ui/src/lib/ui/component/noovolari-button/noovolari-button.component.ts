import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-noovolari-button',
  templateUrl: './noovolari-button.component.html',
  styleUrls: ['./noovolari-button.component.scss']
})
export class NoovolariButtonComponent implements OnInit {

  /**
   * Does the button fill all the relative parent space
   */
  @Input()
  fullSize = false;

  @Input()
  primary = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    return [
      ...this.fullSize ? ["full-size"] : [],
      ...this.primary ? [] : ["secondary"]
    ];
  }
}
