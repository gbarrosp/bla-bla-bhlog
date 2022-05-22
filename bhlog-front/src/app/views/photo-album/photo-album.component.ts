import { Component, OnInit } from '@angular/core';
import { Photo } from 'app/shared/models/photo.model';
import { PhotosService } from 'app/shared/services/photos.service';

@Component({
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {

  photos!: Photo[]

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.photos = this.photosService.getAllPhotos()
  }

}
