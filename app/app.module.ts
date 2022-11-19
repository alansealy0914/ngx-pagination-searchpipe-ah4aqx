import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports:      [BrowserModule, FormsModule, NgxPaginationModule,         AppRoutingModule ],
  declarations: [ AppComponent, SearchFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
