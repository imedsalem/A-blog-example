import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../service/blog-service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  item: any;
  loading = false;

  id?: string;

  constructor(
    private route: ActivatedRoute,
    private myDataService: MyDataService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.loading = true;
    console.log(this.id);
    this.myDataService
      .getById(this.id)
      .then((response) => {
        this.item = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  }
}
