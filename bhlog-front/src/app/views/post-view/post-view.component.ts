import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'app/shared/models/comment.model';
import { Post } from 'app/shared/models/post.model';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { CommentService } from 'app/shared/services/comment.service';
import { PostService } from 'app/shared/services/post.service';
import { PostsView } from 'app/shared/utils/views.utils';
import { lastValueFrom } from 'rxjs';

@Component({
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  postId!: string;
  post!: Post;
  username!: string;
  commentText: string = ''
  comments: Comment[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id')!
    this.username = this.authService.getUsername()
    this.getPost()
    this.getComments()
  }

  async getPost() {
    const post = await lastValueFrom(this.postService.getPost(this.postId))
    this.post = post.data
  }

  async getComments() {
    const comments = await lastValueFrom(this.commentService.getPostComments(this.postId))
    this.comments = comments
  }

  async addComment() {
    let comment = new Comment()
    comment.user.username = this.username
    comment.content = this.commentText
    comment.createdAt = new Date().toISOString()
    comment.post.id = this.postId
    const newComment = await lastValueFrom(this.commentService.newComment(comment))
    this.comments.push(newComment.data)
    this.post.commentsCounter += 1
    this.clear()
  }

  async deleteComment(commentId: string) {
    const deletedComment = await lastValueFrom(this.commentService.deleteComment(commentId))
    let removedIndex = this.comments.indexOf(deletedComment.data)
    this.comments.splice(removedIndex, 1)
  }

  navigateToPosts(){
    this.router.navigate([PostsView.url])
  }

  clear(){
    this.commentText = ''
  }
}
