import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validators/noSpace.validators';

@Component({
  selector: 'app-cusformval',
  templateUrl: './cusformval.component.html',
  styleUrls: ['./cusformval.component.css']
})
export class CusformvalComponent {
  // declare the variable here
  customValForm:any;
  // declare constructor here
  constructor(fb:FormBuilder){
    this.customValForm = fb.group({
      fc_usrname : ['',[
        Validators.required,
        noSpace.noSpaceValidation
      ]],
      fc_pswd : ['',[
        Validators.required,
        noSpace.strictPassword
      ]]
    })
  }
  // declare the from getters here
  // this getter function will help in validation but not for nested form groups
  get fc(){
    return this.customValForm.controls;
  }
  // declare all the methods here
  customFormSub(){
    console.log(this.customValForm.value);
  }
}
