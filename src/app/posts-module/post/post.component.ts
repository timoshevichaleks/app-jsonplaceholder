import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post";
import { PostsService } from "../posts.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    if (isNaN(id)) {
      this.router.navigate(['/posts'])
    }

    this.post$ = this.postsService.getPostDetails(id);
  }

}
