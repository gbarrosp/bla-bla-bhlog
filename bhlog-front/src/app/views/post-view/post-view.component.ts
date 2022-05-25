import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'app/shared/models/post.model';
import { PostService } from 'app/shared/services/post.service';
import { lastValueFrom } from 'rxjs';

@Component({
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  postId!: string;
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id')!
    this.getPost()
  }

  async getPost() {
    const post = await lastValueFrom(this.postService.getPost(this.postId))
    this.post = post.data
  }

}
