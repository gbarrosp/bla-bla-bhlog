import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'app/shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  maxLength: number = 500;

  constructor() { }

  ngOnInit(): void {
    this.post.content = this.post.content.length > this.maxLength ? this.resumeContent(this.post.content) : this.post.content
  }

  resumeContent(content: string){
    let half = content.slice(0, this.maxLength)
    let lastSpaceIndex = half.lastIndexOf(' ')
    return `${content.slice(0, lastSpaceIndex)} ...`
  }
}
