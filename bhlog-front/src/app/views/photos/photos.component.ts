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
  photosLoaded: boolean = false;

  constructor(
    private photosService: PhotosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllPhotos()
  }

  async getAllPhotos(){
    this.photosLoaded = false
    const photos = await lastValueFrom(this.photosService.getAllPhotos())
    this.photos = photos
    this.photosLoaded = true
  }

  addPhoto(){
    let dialogRef = this.dialog.open(PhotoDialogComponent, {
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(newPhoto => {
      if (newPhoto) {
        this.getAllPhotos()
      }
    })
  }
}
