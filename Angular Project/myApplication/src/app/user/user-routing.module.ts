import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserSuccessComponent } from './user-success/user-success.component';


const routes: Routes = [
  {path:"userLogin", component:UserLoginComponent},
  {path:'signup', component : SignUpComponent},
  {path:'usrSucc',component:UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
