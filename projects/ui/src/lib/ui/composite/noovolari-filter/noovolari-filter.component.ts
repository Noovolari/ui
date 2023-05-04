import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: 'lib-noovolari-filter',
  templateUrl: './noovolari-filter.component.html',
  styleUrls: ['./noovolari-filter.component.scss']
})
export class NoovolariFilterComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger?: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
  }

  onApplyClick() {
    this.trigger?.closeMenu();
  }

  onCancelClick() {
    this.trigger?.closeMenu();
  }
}
