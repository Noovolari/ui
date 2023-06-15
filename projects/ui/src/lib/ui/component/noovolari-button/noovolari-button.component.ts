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
  primary = true;

  /**
   * Is this action not reversible?
   */
  @Input()
  critical = false;

  /**
   * Is this action disabled?
   */
  @Input()
  disabled = false;

  /**
   * Is this action not reversible?
   */
  @Input()
  critical = false;

  /**
   * Is this action disabled?
   */
  @Input()
  disabled = false;

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
      ...this.primary ? [] : ["secondary"],
      ...this.critical ? ["critical"] : [],
      ...this.disabled ? ["disabled"] : [],
    ];
  }

  click(event: any): void {
    if (!this.disabled) {
      this.onClick.next(event);
    }
  }
}
