import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'app/shared/models/photo.model';

@Component({
  selector: 'app-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss']
})
export class PhotosGridComponent implements OnInit {

  @Input() photos!: Photo[];
  @Input() photosLoaded!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
