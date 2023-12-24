import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ // comopo/directive/pipe
    AppComponent,
    HomeComponent
  ],
  imports: [  //modules update
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { 

  
// propertyName : data type = value;

a =20;
b : number = 90;
c! : number ;

}


