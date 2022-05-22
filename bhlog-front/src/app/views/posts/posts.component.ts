import { Component, OnInit } from '@angular/core';
import { Post } from 'app/shared/models/post.model';
import { PostService } from 'app/shared/services/post.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: Post[]

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts()
  }

}
