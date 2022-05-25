import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'app/shared/models/post.model';
import { PostView } from 'app/shared/utils/views.utils';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  @Input() isPostView: boolean = false;
  maxLength: number = 500;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
}
