import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-noovolari-filter',
  templateUrl: './noovolari-filter.component.html',
  styleUrls: ['./noovolari-filter.component.scss']
})
export class NoovolariFilterComponent implements OnInit {
  // @ViewChild(MatMenuTrigger)
  // trigger?: MatMenuTrigger;
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onApplyClick() {
    //this.trigger?.closeMenu();
  }

  onCancelClick() {
    //this.trigger?.closeMenu();
  }
}
