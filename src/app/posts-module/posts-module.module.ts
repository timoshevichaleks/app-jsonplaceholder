import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "./posts/posts.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import {PostComponent} from "./post/post.component";



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  exports: [
    PostsComponent
  ],
	imports: [
		CommonModule,
		RouterModule,
    AppRoutingModule
	]
})
export class PostsModuleModule { }
