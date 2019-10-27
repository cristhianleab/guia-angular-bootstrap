import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2ContainerComponent } from './container/module2-container/module2-container.component';

const routes: Routes = [
  {
    path:'',
    component: Module2ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
