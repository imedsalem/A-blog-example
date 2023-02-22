import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from './blog-add/blog-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsListComponent,
    BlogDetailComponent,
    BlogAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
