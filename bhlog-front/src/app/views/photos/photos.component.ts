import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialogComponent } from 'app/shared/components/photo-dialog/photo-dialog.component';
import { Photo } from 'app/shared/models/photo.model';
import { PhotosService } from 'app/shared/services/photos.service';
import { lastValueFrom } from 'rxjs';

@Component({
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos!: Photo[]

  constructor(
    private photosService: PhotosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllPhotos()
  }

  async getAllPhotos(){
    const photos = await lastValueFrom(this.photosService.getAllPhotos())
    this.photos = photos
  }

  addPhoto(){
    this.dialog.open(PhotoDialogComponent, {
      width: '400px'
    })
  }
}
