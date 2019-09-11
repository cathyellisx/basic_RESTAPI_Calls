import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { BtnCompComponent } from './btn-comp/btn-comp.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoadBtnComponent } from './load-btn/load-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    BtnCompComponent,
    HeaderComponent,
    HomeComponent,
    LoadBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    BtnCompComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
