import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private endUrl = 'http://localhost:8080/posts';

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<GetResponse>(this.endUrl).pipe(
      map(response => response._embedded.posts)
    );
  }

}

interface GetResponse {
  _embedded: {
    posts: Post[];
  }
}
