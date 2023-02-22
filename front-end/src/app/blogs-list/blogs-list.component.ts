import { Component } from '@angular/core';
import { MyDataService } from '../service/blog-service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent {
  items: any[] = [];
  loading = false;
  searchTerm: string = '';

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.loading = true;
    this.myDataService
      .getAll()
      .then((response) => {
        console.log(response.data);
        this.items = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  }

  search() {
    if (this.searchTerm) {
      this.loading = true;
      this.myDataService
        .search(this.searchTerm)
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    } else {
      this.getItems();
    }
  }
}
