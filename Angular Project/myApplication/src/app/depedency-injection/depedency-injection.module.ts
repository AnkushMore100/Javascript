import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepedencyInjectionRoutingModule } from './depedency-injection-routing.module';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';


@NgModule({
  declarations: [
    FatherComponent,
    SonComponent
  ],
  imports: [
    CommonModule,
    DepedencyInjectionRoutingModule
  ]
})
export class DepedencyInjectionModule { }
