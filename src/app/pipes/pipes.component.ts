import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // Declare all the variables here
  isValid:boolean = true;
  angular_pipes:Array<string> = [
    'Uppercase Pipe',
    'Lowercase Pipe',
    'Decimal / Number Pipe',
    'Currency Pipe',
    'Date Pipe',
    'JSON Pipe',
    'Percent Pipe',
    'Slice Pipe'
  ];
  pip_uppercase:string = 'uppercase';
  pip_lowercase:string = 'LOWERCASE';
  pip_decimal:number = 268935.77;
  pip_number:number = 200000;
  pip_currency:number = this.pip_decimal;
  // Declare the Constructor here
  constructor() {}
  // Declare all methods here
}
