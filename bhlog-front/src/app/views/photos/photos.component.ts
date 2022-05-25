import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
  albumId?: string;
  photosLoaded: boolean = false;

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id')!
    this.getPhotos()
  }

  async getPhotos(){
    var photos: any;
    this.photosLoaded = false
    if (this.albumId) {
      photos = await lastValueFrom(this.photosService.getAlbumPhotos(this.albumId))
    } else {
      photos = await lastValueFrom(this.photosService.getAllPhotos())
    }
    this.photos = photos
    this.photosLoaded = true
  }

  addPhoto(){
    let dialogRef = this.dialog.open(PhotoDialogComponent, {
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(newPhoto => {
      if (newPhoto) {
        this.photos.push(newPhoto)
      }
    })
  }
}
