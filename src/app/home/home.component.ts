import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;
  userName: any = 'aaaa';
  constructor(public homeService: HomeService) { }

  ngOnInit() {
  }

  onClick1() {
    this.homeService.getProducts().subscribe((data) => {
        this.products = data;
    });
  }

}
