import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paginationTestComponent',
  templateUrl: 'pagination-test.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class PaginationTestComponent {
  @Input() name: string;

  page: number;
  pageSize: number;
  collectionSize: number;
  items = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    for (let i = 1; i <= 100; i++) {
      this.items.push({ Name: 'item ' + i });
    }
  }

  ngOnInit(): void {
    // subscribe to URL params
    this.route.paramMap.subscribe((valMap) => {
      this.pageSize = +valMap.get('pageSize');
      this.page = +valMap.get('page');
      this.collectionSize = 100;
    });
  }

  setPage(page: number) {
    if (page !== this.route.snapshot.params['page']) {
      this.router.navigate([
        'pagination',
        {
          page: this.page,
          pageSize: this.pageSize,
        },
      ]);

      //textFilter: this.textFilter,
      //sortType: this.sortType, sortBy: this.sortBy, category: this.category.field }]);
    }
  }
}
