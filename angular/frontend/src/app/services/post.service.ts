import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../classes/post';
import { User } from '../classes/user';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private endUrl = 'http://localhost:8080/posts';

  constructor(private httpClient: HttpClient) { }

  getAllPosts2(thePostId: number): Observable<Post[]>{


    const seacrhUrl = `${this.endUrl}/search/findUserPosts?id=${thePostId}`;


    return this.httpClient.get<GetResponse>(seacrhUrl).pipe(
      map(response => response._embedded.posts)
    );
  }


  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<GetResponse>(this.endUrl).pipe(
      map(response => response._embedded.posts)
    );
  }


  getSinglePost(thePostId: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.endUrl}/${thePostId}`);
  }


  getUserByPost(thePostId: number): Observable<User>{
    return this.httpClient.get<User>(`${this.endUrl}/${thePostId}/user`);
  }


  getCommentsByPost(thePostId: number): Observable<Comment[]>{
    return this.httpClient.get<GetResponse>(`${this.endUrl}/${thePostId}/comments`).pipe(
      map(response => response._embedded.comments)
    );
  }


}

interface GetResponse {
  _embedded: {
    posts: Post[];
    comments: Comment[];
  }  
}