import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'my-first-app';
  // declare an variable to show this on child component
  parent_message:any = 'This is a message coming form App component parent.';
  childMessage:any;
  eventMsg:any;
  demoMssg:string = 'Demo Text!';

  // showing the image in the html file 
  img_url:string = "https://img.freepik.com/premium-photo/schoolboy-standing-with-backpack-his-back-grey-background-generative-ai_58409-37770.jpg";

  // setting a variable for color to be red
  demo_bool: boolean = true;

  //using @ViewChild to get the message from the child component
  @ViewChild(NavbarComponent) fromChild: any;

  // setting variable for username
  userName:any = 'Hello Viren!';
  constructor(){    
  }
  // Used for @ViewChild example
  ngAfterViewInit(): void {
      // this.childMessage = this.fromChild.messageFromChild;
  }
  // sending the msg bak to html file after getting from app.html file
  child_mssg($event:any){
      this.eventMsg = $event;
  }
  parah_double(){
    console.log('Double Clicked!');    
  }
  EnterPress(){
    console.log('Enter Pressed');    
  }
  getValue(usr_name:any){
    console.log(usr_name);    
  }
  getUserName(userName:any){
    console.log(userName);    
  }
}
