import { Component, OnInit } from '@angular/core';
import { Photo } from 'app/shared/models/photo.model';
import { PhotosService } from 'app/shared/services/photos.service';

@Component({
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos!: Photo[]

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.photos = this.photosService.getAllPhotos()
  }

}
