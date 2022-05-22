import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getAllPhotos(): Photo[] {
    return [
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa',
            username: 'xi pi pi pi'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '2022-05-22T00:55:58.361Z',
      },
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa',
            username: 'xi pi pi pi'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '2022-05-22T00:55:58.361Z',
      },
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa',
            username: 'xi pi pi pi'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '2022-05-22T00:55:58.361Z',
      },
    ]
  }
}
