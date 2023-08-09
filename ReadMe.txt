Git Important Commands
1. git status
2. git add .
3. git pull origin master
4. git commit -m "message"
5. git push -u origin master

====>> Installing the angular

        npm install -g @angular/cli

====>> Creating new project in angular

Write in cmd not in vs terminal
        ng new "name of project here"

====>> To run the angular on the browser
        ng serve

====>> To create a new component with help of cli
        ng g c "component name"
        g ---> generate
        c ---> create 

====>> To share the data we use specific decorators
        @Input ---> parent to child (use "any" inside class if saying error of 'Property '...' has no initializer and is not definitely assigned in the constructor.'")
        Lifecycle of parent to child data sharing
                app.component.ts > app.component.html > child.component.ts > child.component.html

        Two Ways to to send the data from Child to Parent
                -> @ViewChild decorator
                -> @Output and Event Emitter decorator (mostly used when perform some clicks of user entries etc.)

====>> Using angular directives:
        1. *ngFor : It is used for looping the array coming from ts file to html
        2. *ngIf
        3. *ngSwitchCase
        4. ng-template
        5. [ngSwitch]
        6. [ngStyle]

====>> Generating custom pipes via cli
        ng g pipe "name of pipe"

====>> How to share te data from one component to another with no relationship?
        Previously we have seen that how can we share the data form 
                
                1. Parent -> Child (app component -> component inside app folder) we use @Input decorator
                2. Child -> parent (component inside app folder -> app component) we use @Output and Event Emitter and @ViewChild decorator.

        Now, we will learn about sharing of data from one component to another with the help of "Angular service."
        So the easy way to create the angular service is by CLI command.
                Note : all the angular service is under one folder named as services
                => ng g s services/"name of service"

====>> Angular Interface
        Let's take an example , if we are pushing a data lets say an object in the array of objects with the key "id" and "postTitle" and by human error we have misspelled the "postTitle -> posttitle". So to remove such type of an error we will use Angular Interface which will help us to make the blueprint of the data that how should it must look like and if any error occurred it will throw it.
        
        To create an interface in angular we will use CLI to generate it.
        => ng g i models/"name of interface"

====>> Angular Form Types
        Form types in Angular Forms
        1. Template - Driven Form
                We need to first of all have ot import the formmodule in module.ts file.
                We have to create the new instance of a two class.
                        1. formGroup Class  -> inside <form> tags with ngForm
                         => ex. <form #empForm = 'ngForm' (submit) = 'OnSubmit(empForm)'></form>
                        2. formCon1trol Class -> inside input fields with ngModel
                         => ex. <input type="text" name="id" ngModel #id_ipt='ngModel (change) = 'onChange(id_ipt)'/>
        2. Reactive Form
                NOTE : For this approach make sure you have import the modules in app.module.ts
                1. we have to make the constructor and in that we have initialize the formg group and inside we will initializecform control for each input.
                Ex : this.reactiveForm = new FormGroup({
                        fullName : new FormControl('',[
                                Validators.required,
                                Validators.minLength(5)
                        ]),
                        email : new FormControl('',[
                                Validators.required,
                                Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')
                        ]),
                        address : new FormControl('',Validators.required)
                        });
====>> Angular Custom form Validation
        We have done the custom validation on a simple login page with the help of form builder. 
        > We have created manually one new folder under app folder named as validators 
        > noSpace.validators.ts. In this ts file we will import two module named as AbstractControl and ValidationErrors 
        > then create a export class 
        > under that class make a static function so that we dont have to initialize it whenever used in any component.ts file for providing validation to fields 
        > in that function pass the control parameter as a AbstractControl type and scope it will ValidationErrors or null return type 
        > if the logic is true then return the object with validtion error name else return null 
        > the use that validation error name in html file of a component to show that validation error.
