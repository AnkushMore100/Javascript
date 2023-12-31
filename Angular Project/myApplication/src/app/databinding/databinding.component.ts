import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {


//propertyName : data type = value;

a = 20;
b: number = 90;
c!: number;
city : string = "pune";
// db.. define comunication between a component and the DOM.
// It is a technique to link  data to dom
//1. one way data binding 2. two way data binding
//1.one way data binding
//1.string interpolation >>{{}} >> syntax {{propertyName}}
//2.Property binding >> [] >> syntax [attribute] = "PropertyName"
//3. event binding>>()>>on event will bind data to the property
//Two way data bind >> [()]>> [(ngModel)]="propertyName">>> in two-way databinding,automatically

myName ="ankush"
isDisable =false;


fruit! : string;


constructor(){ }

submit(){
 this.fruit = 'Mango';
} 

favFruit = 'Apple';

inputBoxValue(data:any){
  console.log(data.target.value)
  this.myName =data.target.value;


 
 













} 







  
}
