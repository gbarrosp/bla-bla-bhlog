import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Photo } from 'app/shared/models/photo.model';
import { PhotoAlbumView } from 'app/shared/utils/views.utils';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo!: Photo;
  image!: any;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    let objectURL = 'data:image/png;base64,' + this.photo.content;
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  openAlbum(albumId: string) {
    this.router.navigate([PhotoAlbumView.url, albumId])
  }
}
