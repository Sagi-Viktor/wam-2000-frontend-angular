import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeasonsListComponent} from "./seasons-list/seasons-list.component";

const routes: Routes = [
  {path: 'seasons', component: SeasonsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
