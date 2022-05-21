import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosView, PostsView } from 'app/shared/utils/views.utils';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToPosts(){
    this.router.navigate([`/${PostsView.url}`])
  }

  navigateToPhotos(){
    this.router.navigate([`/${PhotosView.url}`])
  }
}
