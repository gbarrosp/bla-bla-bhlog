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
            name: 'laoaooa'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '20020'
      },
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '20020'
      },
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '20020'
      },
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '20020'
      },
      {
        id: '1',
        photo_album: {
          id: '1',
          user: {
            id: '1',
            name: 'laoaooa'
          },
          title: 'uno ambul',
          description: 'belo album'
        },
        title: 'uno ambul',
        description: 'belo album',
        content: 'kkakka',
        created_at: '20020'
      },
    ]
  }
}
