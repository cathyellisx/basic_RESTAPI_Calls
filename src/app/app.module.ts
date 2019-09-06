import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { BtnCompComponent } from './btn-comp/btn-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    BtnCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
