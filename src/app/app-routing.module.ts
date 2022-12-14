import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationTestComponent } from './pagination-test.component';

const routes: Routes = [
  
  {	path: '',
	  redirectTo: 'pagination;page=2;pageSize=10',
    pathMatch: 'full'
  },
  { path: 'pagination', component: PaginationTestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
