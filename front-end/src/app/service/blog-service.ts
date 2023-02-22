import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  private apiBaseURL = 'http://localhost:5000/blogs';

  constructor() {}

  async getAll() {
    return await axios.get(`${this.apiBaseURL}/getBlogs`);
  }

  async search(search: string) {
    return await axios.get(
      `${this.apiBaseURL}/search/${search ? `?search=${search}` : ''}`
    );
  }

  async getById(id: string) {
    return await axios.get(`${this.apiBaseURL}/getBlogById/${id}`);
  }

  async create(item: any) {
    return await axios.post(`${this.apiBaseURL}/createBlog`, item);
  }
}
