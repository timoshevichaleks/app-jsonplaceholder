import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { AppRoutingModule } from "../app-routing.module";


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
    AppRoutingModule
  ]
})
export class PostsModuleModule {
}
