import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  info = 'Hello i AM DoInG cOdiNG'
  date1 = new Date()


// pipe search table

inputboxValue:any='';

  tableData = [
    {
     name : 'Poonam',
     contact:78787878,
     city : "Pune"
    },
    {
      name : 'Jay',
      contact:3333,
      city : "peth"
     },
     {
      name : 'Kirti',
      contact:78787878,
      city : "Pune"
     },
     {
      name : 'Pooja',
      contact:78787878,
      city : "Pune"
     },
     {
      name : 'Poonam',
      contact:78787878,
      city : "Mumbai"
     },
  ]

}
