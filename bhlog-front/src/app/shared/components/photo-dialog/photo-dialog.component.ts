import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MessagesEnum } from 'app/shared/enums/messages.enum';
import { PhotoAlbum } from 'app/shared/models/photo-album.model';
import { Photo } from 'app/shared/models/photo.model';
import { AlbumsService } from 'app/shared/services/albums.service';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { MessageService } from 'app/shared/services/message.service';
import { PhotosService } from 'app/shared/services/photos.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {

  photoForm!: FormGroup;
  fileName!: string;
  file?: File;
  albums!: PhotoAlbum[];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PhotoDialogComponent>,
    private messageService: MessageService,
    private photoService: PhotosService,
    private albumsService: AlbumsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getUserAlbums();
  }

  initForm() {
    this.photoForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
      album: [null, Validators.required],
    });
  }

  async getUserAlbums(){
    const albums = await lastValueFrom(this.albumsService.getUserAlbums(this.authService.getUsername()))
    this.albums = albums
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.file = file;
      console.log(file)
    }
  }

  addPhoto(){
    if (this.photoForm.valid && this.file) {
      let photo: Photo = new Photo()
      photo.title = this.photoForm.get('title')?.value
      photo.description = this.photoForm.get('description')?.value
      photo.photo_album.id = this.photoForm.get('album')?.value
      photo.content = this.file
      photo.created_at = new Date().toISOString()
      this.savePhoto(photo)
    } else {
      this.messageService.showMessage(MessagesEnum.INVALID_FORM)
    }
  }

  async savePhoto(photo: Photo) {
    try {
      this.photoService.newPhoto(photo)
      this.close()
    } catch (e) {
      this.messageService.showMessage(MessagesEnum.INTERNAL_SERVER_ERROR)
    }
  }

  close(){
    this.dialogRef.close()
  }
}
