import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  newComment(comment: Comment){
    return this.http.post<ResponseModel>(`${environment.serverUrl}/bhlog/comments`, comment)
  }

  getPostComments(postId: string): Observable<Comment[]>{
    return this.http.get<ResponseModel>(`${environment.serverUrl}/bhlog/comments/post/${postId}`).pipe(
      map((response: ResponseModel) => {
        const resp: Comment[] = response.data;
        return resp
      }));
  }
}
