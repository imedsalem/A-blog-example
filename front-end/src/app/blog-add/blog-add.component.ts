import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../service/blog-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent {
  loading = false;

  title?: string;
  content?: string;
  author?: string;

  creating = false;

  constructor(private myDataService: MyDataService, private router: Router) {}

  onSubmit() {
    if (!this.title || !this.content || !this.author) {
      alert('Please fill out all fields');
      return;
    }

    const post = {
      title: this.title,
      content: this.content,
      author: this.author,
    };

    this.creating = true;
    this.loading = true;
    this.myDataService
      .create(post)
      .then(() => {
        this.creating = false;
        this.router.navigate(['/']);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.creating = false;
        this.loading = false;
      });
    this.title = '';
    this.content = '';
    this.author = '';
  }
}
