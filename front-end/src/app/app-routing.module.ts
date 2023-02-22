import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

const routes: Routes = [
  {path:"", component:BlogsListComponent},
  {path:'detail/:id', component:BlogDetailComponent},
  {path:'add', component:BlogAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
