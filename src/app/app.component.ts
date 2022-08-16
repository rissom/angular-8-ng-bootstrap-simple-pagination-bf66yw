import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page: number;
  pageSize: number;
  collectionSize: number;

  constructor(private router: Router, private route: ActivatedRoute) {}
}
