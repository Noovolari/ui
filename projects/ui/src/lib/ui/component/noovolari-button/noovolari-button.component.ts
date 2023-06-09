import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'noovolari-button',
  templateUrl: './noovolari-button.component.html',
  styleUrls: ['./noovolari-button.component.scss']
})
export class NoovolariButtonComponent implements OnInit {

  /**
   * Does the button fill all the relative parent space
   */
  @Input()
  fullSize = false;

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Click me!';

  /**
   * Button click event
   */
  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    return [
      ...this.fullSize ? ["full-size"] : [],
      ...this.primary ? [] : ["secondary"]
    ];
  }

  click(event: any): void {
    this.onClick.next(event);
  }
}
