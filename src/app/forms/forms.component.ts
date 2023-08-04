import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  // declare methods here
  form_submit(data:NgForm){
    console.log(data);    
  }
  onNameChge(nameData:any){
    console.log(nameData);
    
  }
}
