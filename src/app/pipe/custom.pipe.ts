import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(fname: string, lname: string, age:number): unknown {
    return `My name is ${fname} ${lname} and my age is ${age} years.`;
  }

}
