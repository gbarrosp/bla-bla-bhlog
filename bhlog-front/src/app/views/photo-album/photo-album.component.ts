import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PhotoDialogComponent } from 'app/shared/components/photo-dialog/photo-dialog.component';
import { Photo } from 'app/shared/models/photo.model';
import { PhotosService } from 'app/shared/services/photos.service';
import { lastValueFrom } from 'rxjs';

@Component({
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {

  photos!: Photo[]
  albumId!: string;
  photosLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id')!
    this.getPhotos()
  }

  async getPhotos(){
    this.photosLoaded = false
    const photos = await lastValueFrom(this.photosService.getAlbumPhotos(this.albumId))
    this.photos = photos
    this.photosLoaded = true
  }

  addPhoto(){
    this.dialog.open(PhotoDialogComponent, {
      width: '400px',
      data: {
        albumId: this.albumId
      }
    })
  }
}
