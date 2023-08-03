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

