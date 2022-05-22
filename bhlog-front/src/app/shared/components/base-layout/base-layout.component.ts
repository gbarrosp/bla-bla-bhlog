import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeView, LoginView } from 'app/shared/utils/views.utils';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateHome(){
    this.router.navigate([`/${HomeView.url}`])
  }

  logout(){
    localStorage.clear()
    this.router.navigate([`${LoginView.url}`])
  }
}
