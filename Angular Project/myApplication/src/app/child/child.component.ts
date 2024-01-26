import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // parent to child
 @Input() cityFromParent:any;


//  child to parent
 @Output() dataFromChild = new EventEmitter;

 state = 'MH-09'

 dataFromChildParent(){
this.dataFromChild.emit(this.state);
 }
}
