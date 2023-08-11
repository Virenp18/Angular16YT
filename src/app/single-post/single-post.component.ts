import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  // declare constructor here
  constructor(private route: ActivatedRoute){

  }
  // ngOnInit here
  ngOnInit(): void {
      this.route.paramMap.subscribe(value => {
        console.log(value.get('post_id'));        
        console.log(value.get('post_title'));        
        console.log(value.keys);        
        // console.log(value.has('post_id'));        
        // console.log(value.getAll('post_id'));        
      });
      const testObs$ = new Observable(observer => {
        observer.next('Hello from observer.')
        observer.next('Hello from observer2.')
      }).subscribe(value => {
        // console.log(value);        
      });
      testObs$.unsubscribe();
  }
}
