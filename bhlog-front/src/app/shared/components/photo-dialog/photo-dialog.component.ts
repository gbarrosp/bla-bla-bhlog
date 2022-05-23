import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagesEnum } from 'app/shared/enums/messages.enum';
import { PhotoAlbum } from 'app/shared/models/photo-album.model';
import { Photo } from 'app/shared/models/photo.model';
import { AlbumsService } from 'app/shared/services/albums.service';
import { MessageService } from 'app/shared/services/message.service';
import { PhotosService } from 'app/shared/services/photos.service';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PhotoDialogComponent>,
    private messageService: MessageService,
    private photoService: PhotosService,
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.albums = this.albumService.getUserAlbums('')
  }

  initForm() {
    this.photoForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
      album: [null, Validators.required],
    });
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
      this.photoService.addPhoto(photo)
      this.close()
    } else {
      this.messageService.showMessage(MessagesEnum.INVALID_FORM)
    }
  }

  close(){
    this.dialogRef.close()
  }
}
