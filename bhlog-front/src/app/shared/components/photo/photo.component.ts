import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Photo } from 'app/shared/models/photo.model';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { PhotosService } from 'app/shared/services/photos.service';
import { PhotoAlbumView } from 'app/shared/utils/views.utils';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo!: Photo;
  @Output() deletedId = new EventEmitter();

  image!: any;
  username!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private photoService: PhotosService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    let objectURL = 'data:image/png;base64,' + this.photo.content;
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    this.username = this.authService.getUsername()
  }

  openAlbum(albumId: string) {
    this.router.navigate([PhotoAlbumView.url, albumId])
  }

  async deletePhoto(photoId: string){
    const deletedPhoto = await lastValueFrom(this.photoService.deletePhoto(photoId))
    this.deletedId.emit(deletedPhoto.data)
  }
}
