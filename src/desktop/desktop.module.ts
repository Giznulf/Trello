import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TopModule } from '../top/top.module';
import {ContentModule} from '../content/content.module'

import { DesktopComponent } from './desktop.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    TopModule,
    ContentModule,
  ],
  declarations: [
    DesktopComponent,

  ],
  exports: [
    DesktopComponent,

  ]
})
export class DesktopModule { }
