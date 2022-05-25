import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'app/shared/models/post.model';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { PostService } from 'app/shared/services/post.service';
import { PostView } from 'app/shared/utils/views.utils';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @Input() isPostView: boolean = false;
  @Output() deletedId = new EventEmitter();
  username!: string;
  maxLength: number = 500;

  constructor(
    private router: Router,
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername()
    if (!this.isPostView) {
      this.post.content = this.post.content.length > this.maxLength ? this.resumeContent(this.post.content) : this.post.content
    }
  }

  resumeContent(content: string){
    let half = content.slice(0, this.maxLength)
    let lastSpaceIndex = half.lastIndexOf(' ')
    return `${content.slice(0, lastSpaceIndex)} ...`
  }

  openPost(postId: string){
    this.router.navigate([PostView.url, postId])
  }

  async deletePost(postId: string){
    const deletedPost = await lastValueFrom(this.postService.deletePost(postId))
    this.deletedId.emit(deletedPost.data)
  }
}
