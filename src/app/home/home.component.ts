import { Component, OnInit } from '@angular/core';
import {HomeService} from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName = 'aa';
  constructor(public homeService: HomeService) {
    this.homeService.getProducts().subscribe((data) => {
      debugger;
    }, () => {
    });
  }




  ngOnInit() {
  }

}
