import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }
}
