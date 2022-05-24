import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPhotos(): Photo[] {
    return []
  }

  getAlbumPhotos(albumId: string): Photo[]{
    return []
  }

  newPhoto(photo: Photo){
    return this.http.post<Photo>(`${environment.serverUrl}/bhlog/photos`, photo)
  }

  editPhoto(){

  }

  deletePhoto(){

  }
}
