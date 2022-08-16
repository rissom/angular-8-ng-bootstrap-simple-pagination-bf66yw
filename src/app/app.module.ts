import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PaginationTestComponent } from './pagination-test.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  declarations: [AppComponent, PaginationTestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
