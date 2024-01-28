import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { Sub1Component } from './sub1/sub1.component';
import { ViewChild1Component } from './view-child1/view-child1.component';
import { ViewChild2Component } from './view-child2/view-child2.component';

const routes: Routes = [
  {path:'adminLanding',component:AdminLandingComponent},
  {path:'sub1',component:Sub1Component},
  {path:'child-view1',component:ViewChild1Component},
  {path:'child-view2',component:ViewChild2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
