import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { Photo } from '../models/photo.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPhotos(): Observable<Photo[]>{
    return this.http.get<ResponseModel>(`${environment.serverUrl}/bhlog/photos`).pipe(
      map((response: ResponseModel) => {
        const resp: Photo[] = response.data;
        return resp
      }));
  }

  getAlbumPhotos(albumId: string): Observable<Photo[]>{
    return this.http.get<ResponseModel>(`${environment.serverUrl}/bhlog/photos/album/${albumId}`).pipe(
      map((response: ResponseModel) => {
        const resp: Photo[] = response.data;
        return resp
      }));
    }

  newPhoto(photo: Photo){
    return this.http.post<Photo>(`${environment.serverUrl}/bhlog/photos`, photo)
  }

  deletePhoto(){

  }
}
