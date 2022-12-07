import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TopComponent } from './top.component';

import { TopMenuComponent } from '../top/top-menu/top-menu.component';
import { WorkspacesComponent } from '../top/top-menu/workspaces/workspaces.component';
import { FavouritesComponent } from '../top/top-menu/favourites/favourites.component';
import { PageTemplatesComponent } from '../top/top-menu/page-templates/page-templates.component';
import { RecentComponent } from '../top/top-menu/recent/recent.component';

import {SubmenuComponent} from '../top/submenu/submenu.component'


import { AimingDirective } from './aiming.directive';
import {BackgroundDirective} from '../background.directive';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    TopComponent,

    TopMenuComponent,
    WorkspacesComponent,
    FavouritesComponent,
    PageTemplatesComponent,
    RecentComponent,

    SubmenuComponent,

    AimingDirective,
    BackgroundDirective,
   ],
  exports: [TopComponent]
})
export class TopModule { }
