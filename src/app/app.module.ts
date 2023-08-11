import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { DirectivesComponent } from './directives/directives.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipe/custom.pipe';
import { FormsComponent } from './forms/forms.component';
import { CusformvalComponent } from './cusformval/cusformval.component';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    TaskOneComponent,
    DirectivesComponent,
    TaskTwoComponent,
    PipesComponent,
    CustomPipe,
    FormsComponent,
    CusformvalComponent,
    HomeComponent,
    AllPostsComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : 'customValidation' , component : CusformvalComponent},
      { path : '' , component : HomeComponent},
      { path : 'taskOne' , component : TaskOneComponent},
      { path : 'allPosts' , component : AllPostsComponent},
      { path : 'postDirectives' , component : DirectivesComponent},
      { path : 'postForms' , component : FormsComponent},
      { path : 'pipes' , component : PipesComponent},
      { path : 'post/:post_id/:post_title' , component : SinglePostComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
