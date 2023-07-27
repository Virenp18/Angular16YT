import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string = 'This is a dynamic title!';

  messageToSend:any = 'This is a message form child to parent via output decor';
  // Necessary for child to parent data sharing
  @Output() sendMssg = new EventEmitter<any>();
  constructor(){}

  ngOnInit(): void { }

  ClickMe(){
    this.sendMssg.emit(this.messageToSend);    
  }
}
