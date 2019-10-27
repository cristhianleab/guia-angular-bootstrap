import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1ContainerComponent } from './container/module1-container/module1-container.component';

const routes: Routes = [
  {
    path:'',
    component: Module1ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
