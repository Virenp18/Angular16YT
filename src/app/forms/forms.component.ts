import { Component } from '@angular/core';
import { FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  // declare methods here
  form_submit(data:NgForm){
    console.log(data);    
    // How to get the values of the form.
    let formvalues = data.value;
    console.log(formvalues);
    
  }
  onNameChge(nameData:any){
    console.log(nameData);
    
  }
}
