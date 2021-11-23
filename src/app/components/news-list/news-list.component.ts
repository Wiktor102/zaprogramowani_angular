import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

    public newsList: string[] = ["1", "2"];

  constructor() { }

  ngOnInit(): void {
  }

}
