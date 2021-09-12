import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { Observable } from "rxjs";
import { Post } from "../post";
import { Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService, private router: Router) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  onSelect(id: number) {
    this.router.navigate(['posts', id]).then();
  }

}
