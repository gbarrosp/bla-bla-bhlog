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

  posts: Post[] = []
  postsLoaded: boolean = false;

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
    this.postsLoaded = true
  }

  addPost(){
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '800px',
      height: '90vh',
      maxHeight: '800px'
    })
    dialogRef.afterClosed().subscribe( newPost => {
      if (newPost) {
        this.getAllPosts()
      }
    })
  }

  removePost(postId: string){
    let removedIndex = this.posts.indexOf(this.posts.find(post => post.id === postId)!)
    this.posts.splice(removedIndex, 1)
  }
}
