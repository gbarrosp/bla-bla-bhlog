import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  photo: Photo = new Photo();
  showLoader: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    if (this.data) {
      this.photoForm.patchValue({
        album: this.data.albumId
      })
    }
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
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e: any) => {
        const bytes = e.target.result.split('base64,')[1];
        this.photo.content = bytes
      };
    }
  }

  addPhoto(){
    if (this.photoForm.valid && this.file) {
      this.photo.title = this.photoForm.get('title')?.value
      this.photo.description = this.photoForm.get('description')?.value
      this.photo.photoAlbum.id = this.photoForm.get('album')?.value
      this.photo.photoAlbum.title = this.albums.find(album => album.id === this.photo.photoAlbum.id)?.title!
      this.photo.createdAt = new Date().toISOString()
      this.savePhoto(this.photo)
    } else {
      this.messageService.showMessage(MessagesEnum.INVALID_FORM)
    }
  }

  async savePhoto(photo: Photo) {
    try {
      this.showLoader = true
      const newPhoto = await lastValueFrom(this.photoService.newPhoto(photo))
      this.dialogRef.close(newPhoto.data)
    } catch (e) {
      this.messageService.showMessage(MessagesEnum.INTERNAL_SERVER_ERROR)
    }
  }

  close(){
    this.dialogRef.close(false)
  }
}
