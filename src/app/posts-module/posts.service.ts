import { Injectable } from '@angular/core';
import { Post } from "./post";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

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

  getComments(): Observable<any> {
    return this.http.get(`${environment.api}/comments`);
  }

}
