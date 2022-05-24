import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPosts(): Post[]{
    let posts: Post[] = []
    return posts
  }

  newPost(post: Post){
    console.log(post)
  }

  deletePost(){

  }
}
