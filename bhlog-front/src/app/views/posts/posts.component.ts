import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from 'app/shared/components/post-dialog/post-dialog.component';
import { Post } from 'app/shared/models/post.model';
import { PostService } from 'app/shared/services/post.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: Post[]

  constructor(
    private postService: PostService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts()
  }

  addPost(){
    this.dialog.open(PostDialogComponent, {
      width: '400px'
    })
  }
}
