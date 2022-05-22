import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPosts(): Post[]{
    let posts: Post[] = [
      {
        id: '1',
        title: 'Melhor post',
        user: {
          id: '1',
          name: 'Gustavo',
          username: 'gbarrosp'
        },
        content: 'Some content',
        created_at: '2022-05-22T00:55:58.361Z',
        commentsCounter: 10
      },
      {
        id: '1',
        title: 'Melhor post',
        user: {
          id: '1',
          name: 'Gustavo',
          username: 'gbarrosp'
        },
        content: 'Some content',
        created_at: '2022-05-22T00:55:58.361Z',
        commentsCounter: 10
      },
      {
        id: '1',
        title: 'Melhor post',
        user: {
          id: '1',
          name: 'Gustavo',
          username: 'gbarrosp'
        },
        content: 'Some content',
        created_at: '2022-05-22T00:55:58.361Z',
        commentsCounter: 10
      },
    ]
    return posts
  }
}
