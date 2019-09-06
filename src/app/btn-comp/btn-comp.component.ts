import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn-comp',
  templateUrl: './btn-comp.component.html',
  styleUrls: ['./btn-comp.component.css']
})
export class BtnCompComponent implements OnInit {
  @Output() public passGetInfo = new EventEmitter<any>();

  pressBtn() {
    this.passGetInfo.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
