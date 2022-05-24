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
        const resp: Post[] = response.data;
        return resp
      }));
  }

  newPost(post: Post){
    return this.http.post<Post>(`${environment.serverUrl}/bhlog/posts`, post)
  }

  deletePost(){

  }
}
