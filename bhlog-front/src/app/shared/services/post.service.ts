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
        content: `# This one is bare
        ## Title 2
        You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance.
        This one also checks for misspelled words as you type!`,
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
        content: `# This one is bare
        You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance.
        This one also checks for misspelled words as you type!`,
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
        content: `# This one is bare
        You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance.
        This one also checks for misspelled words as you type!`,
        created_at: '2022-05-22T00:55:58.361Z',
        commentsCounter: 10
      },
    ]
    return posts
  }

  newPost(post: Post){
    console.log(post)
  }

  deletePost(){

  }
}
