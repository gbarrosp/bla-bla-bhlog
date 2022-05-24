import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from 'app/shared/components/post-dialog/post-dialog.component';
import { Post } from 'app/shared/models/post.model';
import { PostService } from 'app/shared/services/post.service';
import { lastValueFrom } from 'rxjs';

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
    this.getAllPosts()
  }

  async getAllPosts(){
    const posts = await lastValueFrom(this.postService.getAllPosts())
    this.posts = posts
  }

  addPost(){
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '800px'
    })
    dialogRef.afterClosed().subscribe( newPost => {
      if (newPost) {
        this.getAllPosts()
      }
    })
  }
}
