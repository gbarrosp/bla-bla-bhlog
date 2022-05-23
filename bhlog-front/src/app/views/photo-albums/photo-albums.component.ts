import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoAlbum } from 'app/shared/models/photo-album.model';
import { PhotoAlbumView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {

  albums: PhotoAlbum[] = [
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
    {
      id: '1',
      title: 'Meu Primeiro Album',
      description: 'As fotos mais lindas',
      user: {
        id: '1',
        name: 'gugu',
        username: 'gbarrosp'
      }
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openAlbum(albumId: string){
    this.router.navigate([PhotoAlbumView.url, albumId])
  }
}
