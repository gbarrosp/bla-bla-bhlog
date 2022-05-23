import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlbumDialogComponent } from 'app/shared/components/album-dialog/album-dialog.component';
import { PhotoAlbum } from 'app/shared/models/photo-album.model';
import { AlbumsService } from 'app/shared/services/albums.service';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { PhotoAlbumView } from 'app/shared/utils/views.utils';
import { lastValueFrom } from 'rxjs';

@Component({
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {

  albums!: PhotoAlbum[]

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private albumsService: AlbumsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserAlbums()
  }

  async getUserAlbums(){
    const albums = await lastValueFrom(this.albumsService.getUserAlbums(this.authService.getUser().id!))
    this.albums = albums
  }

  openAlbum(albumId: string){
    this.router.navigate([PhotoAlbumView.url, albumId])
  }

  addAlbum(){
    let dialogRed = this.dialog.open(AlbumDialogComponent, {
      width: '320px'
    })
    dialogRed.afterClosed().subscribe(() => {
      this.getUserAlbums()
    })
  }
}
