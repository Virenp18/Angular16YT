import { Component } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent {
  // create the variables here
  isValid:boolean = true;
  input_name:string = "";
  input_mail:string = "";
  input_address:string = "";

  // create an empty array of object type
  userArray:Array<any> = [];

  constructor(){}

  // create all the methods here
  addUser(){
    // start pushing the values to the empty array
    this.userArray.push({
      name : this.input_name,
      email : this.input_mail,
      address : this.input_address
    });
  }
  delRow(index:any){
    // splice(from which index, to how many after that you want to remove)
    this.userArray.splice(index,1);
  }
}
