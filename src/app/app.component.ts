import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetInformationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: any = {};

  constructor(private httpClient: HttpClient, private getInformation: GetInformationService) {}

  get_info($event): void {
    this.getInformation.getInfo().subscribe((res) => {
      this.info = res;
    });
  }

}
