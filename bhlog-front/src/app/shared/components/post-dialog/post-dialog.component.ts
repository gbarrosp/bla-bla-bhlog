import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MessagesEnum } from 'app/shared/enums/messages.enum';
import { Post } from 'app/shared/models/post.model';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { MessageService } from 'app/shared/services/message.service';
import { PostService } from 'app/shared/services/post.service';
import { SimplemdeComponent, SimplemdeOptions } from 'ngx-simplemde';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {

  postForm!: FormGroup;

  options: SimplemdeOptions = {
    toolbar: ['bold', 'italic', 'heading', '|', 'quote']
  };

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PostDialogComponent>,
    private messageService: MessageService,
    private authService: AuthService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  addPost() {
    if (this.postForm.valid) {
      let post: Post = new Post()
      post.title = this.postForm.get('title')?.value
      post.content = this.postForm.get('content')?.value
      post.commentsCounter = 0
      post.created_at = new Date().toISOString()
      post.user = this.authService.getUser()
      this.savePost(post)
    } else {
      this.messageService.showMessage(MessagesEnum.INVALID_FORM)
    }
  }

  async savePost(post: Post) {
    try {
      this.postService.newPost(post)
      this.close()
    } catch (e) {
      this.messageService.showMessage(MessagesEnum.INTERNAL_SERVER_ERROR)
    }
  }

  close() {
    this.dialogRef.close()
  }
}
