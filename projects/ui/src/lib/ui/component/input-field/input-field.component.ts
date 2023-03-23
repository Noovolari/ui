import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * A placeholder to show when the input value is empty
   */
  @Input()
  placeholder = "Placeholder";

}
