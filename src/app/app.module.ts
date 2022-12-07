import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DesktopModule } from '../desktop/desktop.module';


import { AppComponent } from './app.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { DesktopComponent} from '../desktop/desktop.component';



const appRoutes: Routes =[
  { path: '', component: HomePageComponent},
  { path: 'desktop', component: DesktopComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DesktopModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
