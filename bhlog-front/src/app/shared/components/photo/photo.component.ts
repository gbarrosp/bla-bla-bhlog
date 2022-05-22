import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openAlbum(albumId: string) {
    this.router.navigate([PhotoAlbumView.url, albumId])
  }
}
