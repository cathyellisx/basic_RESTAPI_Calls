import { Component, OnInit } from '@angular/core';
import {GetInformationService} from '../_services';

@Component({
  selector: 'app-load-btn',
  templateUrl: './load-btn.component.html',
  styleUrls: ['./load-btn.component.css']
})
export class LoadBtnComponent implements OnInit {
  load: boolean;

  ngOnInit() {
  }

  constructor( private getInformation: GetInformationService) {}

  get_info($event): void {
    this.getInformation.getInfo().subscribe((res) => {
      this.getInformation.passInfo = res;
      this.load = true;
    });
  }

}
