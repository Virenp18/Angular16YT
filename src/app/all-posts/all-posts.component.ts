import { Component } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
// declare all the variables
allPosts : Array<any> = [
  { postId : 1 , postTitle: "Angular Directives", postLink: "postDirectives" },
  { postId : 2 , postTitle: "Angular Forms" , postLink: "postForms"},
  { postId : 3 , postTitle: "Angular Pipes", postLink: "pipes" },
];

}
