import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  // services import
  constructor(private dataService:DataService,private router : Router){}
  login(data:any){

    console.log("data",data);
    
    this.dataService.userName = data.uName; // ankush
    this.router.navigateByUrl('/user/usrSucc');






// Template driven : form fileds are less
// reactive form : form fileds are more,need custom validation

// login(data:any){

//   console.log(data);
// }







//   console.log(data)
//  let userName =  data.uName.replace(/\s+/g, ' ')
//  console.log(userName);
 
//  let request ={
//      'UserName': userName,
//      'Password' : data.Password
 }

 isShowPass =false;

toShowPassword(){
  this.isShowPass =! this.isShowPass
}

}



