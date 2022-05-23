import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoAlbum } from 'app/shared/models/photo-album.model';
import { AlbumsService } from 'app/shared/services/albums.service';
import { PhotoAlbumView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {

  albums!: PhotoAlbum[]

  constructor(
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albums = this.albumsService.getUserAlbums('')
  }

  openAlbum(albumId: string){
    this.router.navigate([PhotoAlbumView.url, albumId])
  }
}
