import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products = [
        {
            img: 'assets/images/product-1.jpg',
            price: '145,99',
            title: '  Evenodd',
            textAlert: 'ON SALE!',
            status: 1
        },
        {
            img: 'assets/images/product-2.jpg',
            price: '145,99',
            title: '  Evenodd',
            textAlert: '  ',
            status: 3
        },
        {
            img: 'assets/images/product-1.jpg',
            price: '145,99',
            title: '  Evenodd',
            textAlert: 'OUT OF STOCK',
            status: 2

        },
    ]
  constructor() { }

  ngOnInit() {
  }

}
