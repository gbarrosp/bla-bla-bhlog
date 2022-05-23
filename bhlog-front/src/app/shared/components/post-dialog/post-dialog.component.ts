import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'app/shared/services/message.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {

  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PostDialogComponent>,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required]
    });
  }

  addPost() {

  }

  close() {
    this.dialogRef.close()
  }
}
