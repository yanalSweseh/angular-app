import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  providers: []
})
export class CategoriesListComponent implements OnInit {
  categories: Array<any> = [];
  constructor(public homeService: HomeService) {
    homeService.getCategories().subscribe( (data) => {
       this.categories = data.categories;
    });
  }

  ngOnInit() {
  }

}
