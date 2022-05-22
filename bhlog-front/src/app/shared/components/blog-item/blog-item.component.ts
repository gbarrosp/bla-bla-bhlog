import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {


  commentsNumber!: number;

  constructor() { }

  ngOnInit(): void {
    this.commentsNumber = 19
  }

}
