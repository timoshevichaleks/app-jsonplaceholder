import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PostsService } from "../posts.service";
import { Comment } from "../comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment$: Observable<Comment[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
   this.getComments();
  }

  getComments() {
    this.comment$ = this.postsService.getComments();
  }

}
