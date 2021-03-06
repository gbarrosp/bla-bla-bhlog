import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MessagesEnum } from 'app/shared/enums/messages.enum';
import { PhotoAlbum } from 'app/shared/models/photo-album.model';
import { AlbumsService } from 'app/shared/services/albums.service';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { MessageService } from 'app/shared/services/message.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.scss']
})
export class AlbumDialogComponent implements OnInit {

  albumForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AlbumDialogComponent>,
    private messageService: MessageService,
    private albumService: AlbumsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.albumForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
    });
  }

  addAlbum(){
    if (this.albumForm.valid) {
      let album: PhotoAlbum = new PhotoAlbum()
      album.title = this.albumForm.get('title')?.value
      album.description = this.albumForm.get('description')?.value
      album.user.username = this.authService.getUsername()
      this.saveAlbum(album)
    } else {
      this.messageService.showMessage(MessagesEnum.INVALID_FORM)
    }
  }

  async saveAlbum(album: PhotoAlbum) {
    try {
      await lastValueFrom(this.albumService.newAlbum(album))
      this.close()
    } catch (e) {
      this.messageService.showMessage(MessagesEnum.INTERNAL_SERVER_ERROR)
    }
  }

  close(){
    this.dialogRef.close()
  }
}
