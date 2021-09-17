import { Injectable } from '@angular/core';
import { Post } from "./models/post";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Comment } from "./models/comment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.api}/posts`);
  }

  getPostDetails(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.api}/posts/${id}`);
  }

  fetchComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.api}/posts/${id}/comments`);
  }
}
