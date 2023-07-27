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
