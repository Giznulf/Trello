import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { FormsModule }   from '@angular/forms';

import { ColumnsComponent } from './columns/columns.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,



  ],
  declarations: [
    ContentComponent,
    ColumnsComponent,
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
