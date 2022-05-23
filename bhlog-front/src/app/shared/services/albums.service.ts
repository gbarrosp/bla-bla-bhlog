import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';
import { PhotoAlbum } from '../models/photo-album.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAlbums(username: string): Observable<PhotoAlbum[]>{
    return this.http.get<ResponseModel>(`${environment.serverUrl}/bhlog/albums/${username}`).pipe(
      map((response: ResponseModel) => {
        const resp: PhotoAlbum[] = response.data;
        return resp
      }));
  }

  newAlbum(album: PhotoAlbum): Observable<PhotoAlbum> {
    return this.http.post<PhotoAlbum>(`${environment.serverUrl}/bhlog/albums`, album)
  }

  editAlbum(album: PhotoAlbum): PhotoAlbum {
    return album
  }

  deleteAlbum(albumId: string): void {
  }
}
