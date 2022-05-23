import { Injectable } from '@angular/core';
import { PhotoAlbum } from '../models/photo-album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  getUserAlbums(userId: string): PhotoAlbum[]{
    return [
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
  }

  newAlbum(album: PhotoAlbum): PhotoAlbum {
    return album
  }

  editAlbum(album: PhotoAlbum): PhotoAlbum {
    return album
  }

  deleteAlbum(albumId: string): void {
  }
}
