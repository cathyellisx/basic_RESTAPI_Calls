import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  @Input() passInfo: any = {};

  constructor() { }

  ngOnInit() {
  }

}
