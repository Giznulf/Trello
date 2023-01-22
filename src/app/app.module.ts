import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from 'src/app/core/home-page/home-page.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from 'src/app/core/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomePageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
