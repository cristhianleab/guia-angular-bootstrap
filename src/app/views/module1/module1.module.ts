import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1RoutingModule } from './module1-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { Module1ContainerComponent } from './container/module1-container/module1-container.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    Module1ContainerComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class Module1Module { }
