import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialogComponent } from 'app/shared/components/photo-dialog/photo-dialog.component';
import { Photo } from 'app/shared/models/photo.model';
import { PhotosService } from 'app/shared/services/photos.service';

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
    this.photos = this.photosService.getAllPhotos()
  }

  addPhoto(){
    this.dialog.open(PhotoDialogComponent)
  }
}
