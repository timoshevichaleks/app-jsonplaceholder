import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PostsService } from "../posts.service";
import { Comment } from "../models/comment";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment$: Observable<Comment[]>;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    this.fetchComments(id);
  }

  private fetchComments(id: number) {
    this.comment$ = this.postsService.fetchComments(id);
  }
}
