import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "./posts-list/posts.component";



@NgModule({
  declarations: [
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModuleModule { }
