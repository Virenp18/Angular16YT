import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';

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
    'Slice Pipe',
    'Custom Pipe'
  ];
  pip_uppercase:string = 'uppercase';
  pip_lowercase:string = 'LOWERCASE';
  pip_decimal:number = 268935.77;
  pip_number:number = 200000;
  pip_currency:number = this.pip_decimal;
  pip_date:Date = new Date;
  pip_json:object = {
    id : 1,
    name: "Varend"
  };
  pip_percent:number = 0.9832;
  pip_slice: Array<number> = [
    0,1,2,3,4,5,6,7,8
  ];
  pip_slice_2 : string = this.pip_lowercase;
  pip_custom_fname : string = "Varend";
  pip_custom_lname : string = "Pratap";
  pip_custom_age : number = 26;

  // initialize global variable for demoservice injector
  demoServiceArray:Array<any>;
  // Declare the Constructor here
  // for injecting a service declare it in constructor param with private access specifier
  constructor(private demoService : DemoService) {
    this.demoServiceArray = demoService.demoArray;
  }
  // Declare all methods here
}
