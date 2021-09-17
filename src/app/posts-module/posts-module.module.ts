import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { RouterModule } from "@angular/router";
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostsModuleModule {
}
