import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<ResponseModel>(`${environment.serverUrl}/bhlog/posts`).pipe(
      map((response: ResponseModel) => {
        const resp: Post[] = response.data.sort((a: Post,b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        return resp
      }));
  }

  newPost(post: Post){
    return this.http.post<ResponseModel>(`${environment.serverUrl}/bhlog/posts`, post)
  }

  getPost(postId: string){
    return this.http.get<ResponseModel>(`${environment.serverUrl}/bhlog/posts/${postId}`)
  }

  deletePost(postId: string){
    return this.http.delete<ResponseModel>(`${environment.serverUrl}/bhlog/posts/${postId}`)
  }
}
