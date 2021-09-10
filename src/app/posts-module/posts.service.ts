import { Injectable } from '@angular/core';
import { Post } from "./post";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${environment.api}/posts`).pipe();
  }

}
