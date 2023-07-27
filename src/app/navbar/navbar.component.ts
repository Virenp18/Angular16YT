import { Component, OnInit, Input } from "@angular/core";
@Component({
    selector : 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
    // this is an example of Parent to child data sharing coming from app.component.html file top navbar.component.ts
    @Input() fromParent: any;
    // assign a variable here from child -> parent data sharing
    messageFromChild : any = "This is a message coming form navbar child component";

    constructor() {}
    ngOnInit(): void {}
}