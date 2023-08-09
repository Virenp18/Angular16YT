import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
