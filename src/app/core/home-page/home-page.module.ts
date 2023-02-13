import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ContentModule } from 'src/app/content/content.module';

import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AimingDirective } from 'src/app/shared/directives/aiming.directive';

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule, ContentModule],
  declarations: [HomePageComponent, NavbarComponent, AimingDirective],
  exports: [HomePageComponent],
})
export class HomePageModule {}
