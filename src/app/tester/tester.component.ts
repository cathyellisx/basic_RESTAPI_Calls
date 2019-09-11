import { Component, OnInit } from '@angular/core';
import { GetInformationService } from '../_services';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  information: any = {};

  constructor( private displayInfo : GetInformationService ) {}

  ngOnInit() {
    this.displayInformation();
  }

  displayInformation() {
    this.information = this.displayInfo.passInfo;
  }

}
