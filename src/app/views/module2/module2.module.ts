import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Module2RoutingModule } from './module2-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Module2ContainerComponent } from './container/module2-container/module2-container.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    Module2ContainerComponent,
    CarouselComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    CarouselModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Module2Module { }
