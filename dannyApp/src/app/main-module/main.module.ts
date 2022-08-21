import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const MAIN_ROUTES : Routes = [
 { }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_ROUTES)
  ]
})
export class MainModule { }
