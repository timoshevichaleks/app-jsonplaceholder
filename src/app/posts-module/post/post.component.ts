import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { PostsService } from "../posts.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    if (isNaN(id)) this.router.navigate(['/posts']);
    else this.postsService.getPostDetails(id).subscribe((res: Post) => {
      this.post = res;
    });
  }

}
