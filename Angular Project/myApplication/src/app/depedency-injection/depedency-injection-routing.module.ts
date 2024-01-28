import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';

const routes: Routes = [
{path:'father',component:FatherComponent},
{path:'son',component:SonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepedencyInjectionRoutingModule { }
