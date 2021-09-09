import { Injectable } from '@angular/core';
import {Post} from "./post";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {createI18nOptions} from "@angular-devkit/build-angular/src/utils/i18n-options";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts!: Post[];
  siteUrl = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) { }

  getData() {
    const url = this.siteUrl;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    let params = new HttpParams();

    const options = { headers, params };

    this.http.get<Post[]>(url, options).subscribe(
      res => {
        this.posts = res
        console.log(res)
      },
      err => console.log(err.statusText)
    )
  }

}
