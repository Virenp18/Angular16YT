import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  // declare variables
  // So now we will call this array in two components (pipes,post)
  demoArray: Array<any> = [
    {id: 1,title:"abc"},
    {id: 2,title:"def"},
    {id: 3,title:"ghi"},
  ];
  
  constructor() { }  
}
