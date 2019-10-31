import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
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
    type: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

}
