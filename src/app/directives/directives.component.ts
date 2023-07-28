import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // Creating a variable of array of string type
  post_array:Array<string> = ['Rafael', 'Ankita', 'Viren', 'Atul'];
  // Creating a variable of Object Array
  object_array:Array<any> = [
    {id : 1, post_title : "Post 1"},
    {id : 2, post_title : "Post 2"},
    {id : 3, post_title : "Post 3"},
    {id : 4, post_title : "Post 4"}
  ];
  // create a varibale for storing the button no in clickMe()
  button:string = "Try clicking at any of the above buttons.";
  // creating the flag for ngStyle directive
  is_Valid:boolean = true;

  constructor(){}

  addFriend(){
    // This is a example of Change Detection
    this.post_array.push("Olajumoke");
  }
  addObject(){
    // This is a example of Change Detection
    this.object_array.push({id : 5, post_title : "Post 5"});
  }
  removeFriend(post:any){
    // get index of the remove button we are clicking
    let index = this.post_array.indexOf(post);
    // removing that from array using splice method
    this.post_array.splice(index,1);    
  }
  removeObject(index:any){
    // removing that from array using splice method
    this.object_array.splice(index,1);    
  }
  clickMe(btn_no:string){
    this.button = btn_no;
  }
}
