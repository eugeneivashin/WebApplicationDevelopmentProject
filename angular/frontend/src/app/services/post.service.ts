import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Post } from '../classes/post';
import { User } from '../classes/user';
import { Comment } from '../classes/comment';
import { TagList } from '../classes/tag-list';
import { Tag } from '../classes/tag';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private endUrlComment = 'http://localhost:8080/comments';

  private endUrl = 'http://localhost:8080/posts';

  public currentComment: BehaviorSubject<Comment> = new BehaviorSubject<Comment>(new Comment());

  
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

  getAllPostsTest(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`http://localhost:8080/posts/getall`);
  }


  getSinglePost(thePostId: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.endUrl}/getdata/${thePostId}`);
  }


  getUserByPost(thePostId: number): Observable<User>{
    return this.httpClient.get<User>(`${this.endUrl}/${thePostId}/user`);
  }

  getCommentsByPost(thePostId: number): Observable<Comment[]>{
    return this.httpClient.get<GetResponse>(`${this.endUrl}/${thePostId}/comments`).pipe(
      map(response => response._embedded.comments)
    );
  }

  getSingleUser(theUserId: number): Observable<User>{
    return this.httpClient.get<User>(`http://localhost:8080/users/${theUserId}`)
  }

  // by keyword 
  searchPosts(searchKeyword: string):  Observable<Post[]>{

    const seacrhUrl = `${this.endUrl}/search/findByTitleContaining?title=${searchKeyword}`;


    return this.httpClient.get<GetResponse>(`${seacrhUrl}`).pipe(
      map(response => response._embedded.posts)
    );
  }

  searchPostsByTags(searchKeyword: string):  Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.endUrl}/tag/${searchKeyword}`);
  }

  searchPostsByTagsAndTitles(searchKeyword: string):  Observable<Post[]>{

    const seacrhUrlTag = `${this.endUrl}/search/findTagListPost?title=${searchKeyword}`;


    return this.httpClient.get<GetResponse>(`${seacrhUrlTag}`).pipe(
      map(response => response._embedded.posts)
    );
  }

  getUserByComment(commentId: number):Observable<User>{

    const tempEndUrl = 'http://localhost:8080/comments';

    return this.httpClient.get<User>(`${tempEndUrl}/${commentId}/user`);
  }

  getPostTags(tag_list: TagList): Observable<Tag>{

    const tempEndUrlTag = 'http://localhost:8080/tag_Lists';
    return this.httpClient.get<Tag>(`${tempEndUrlTag}/${tag_list.id}/tag`);
  }



  sendComment(comment: Comment): Observable<Comment>{
    return this.httpClient.post<Comment>(`${this.endUrlComment}`, this.currentComment);
  }


/*
  upvote(thePostId: number){
    this.httpClient.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
        .subscribe(data => this.postId = data.id);
  }
*/

}

interface GetResponse {
  _embedded: {
    posts: Post[];
    comments: Comment[];
  }  
}