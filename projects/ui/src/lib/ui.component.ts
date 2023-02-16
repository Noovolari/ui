import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui',
  template: `
    <button>
      ui works!
    </button>
  `,
  styles: [
  ]
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
