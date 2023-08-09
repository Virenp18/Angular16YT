import { Component } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
  // add variables here
  reactiveForm:any;
  // add constructor here
  constructor(fb:FormBuilder){
    // =>>> Without Form Builder

    // this.reactiveForm = new FormGroup({
    // // nesting of form groups with help getter methods
    // fullName : new FormGroup({
    //     firstName : new FormControl('',[
    //       Validators.required,
    //       Validators.minLength(5)
    //     ]),
    //     lastName: new FormControl('',[
    //       Validators.required,
    //       Validators.maxLength(1)
    //     ])
    //   }),
    //   email : new FormControl('',[
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   address : new FormControl('',Validators.required),
    //   // reactive form arrays
    //   skills : new FormArray([])
    // });

    // =>>> With form Builder
    this.reactiveForm = fb.group({
      fullName : fb.group({
        firstName : ['',[
          Validators.required,
          Validators.minLength(5)
        ]],
        lastName : ['',[
          Validators.required,
          Validators.maxLength(1)
        ]]
      }),
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      address : ['',Validators.required],
      skills : fb.array([],Validators.compose([Validators.required]))
    });
  }
  // Getter Methods for reactive form method for validating the errors used in reactive form
  get FirstName(){
    return this.reactiveForm.get('fullName.firstName');
  }
  get LastName(){
    return this.reactiveForm.get('fullName.lastName');
  }
  get Email(){
    return this.reactiveForm.get('email');
  }
  get Address(){
    return this.reactiveForm.get('address');
  }
  get Skills(){
    return this.reactiveForm.get('skills') as FormArray;
  }
 
  // declare methods here
  deleteSkill(index:any){
    this.Skills.removeAt(index);
  }
  addSkill(skills:HTMLInputElement){
    this.Skills.push(
      new FormControl(skills.value)
    );    
    // Empty the input value after enter
    skills.value='';
  }
  submitReactiveForm(){
    console.log(this.reactiveForm.value);    
  }

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
