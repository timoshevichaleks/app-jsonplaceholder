import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { PostsService } from "../posts.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Post;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = +params.id;

      if (isNaN(id)) return;

      this.postsService.getPostDetails(id).subscribe((res: Post) => {
        this.post$ = res;
      });
    });

  }

}
