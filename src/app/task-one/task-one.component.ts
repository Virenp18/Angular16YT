import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent {
  input1:string = '';
  textareainput:string = '';
  showImage:string = '';
  tryCheck:any;
}
