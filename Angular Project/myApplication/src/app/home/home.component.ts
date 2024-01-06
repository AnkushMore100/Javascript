import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// constructor is a method which get invoked internally at the time of component initialization
  constructor(private router : Router){}

  test(){
    this.router.navigateByUrl('test')
  }

  directivecompo(){
    this.router.navigateByUrl('directive')
  }

  adminMod(){
    this.router.navigateByUrl("/admin/adminLanding")
  }
}
