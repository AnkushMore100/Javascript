import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  userName:any;

  // multiple componet
  studentData = new Subject <any>();
  constructor() { }
}
