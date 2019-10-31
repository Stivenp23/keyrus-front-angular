import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-product-featured',
  templateUrl: './product-featured.component.html',
  styleUrls: ['./product-featured.component.scss']
})
export class ProductFeaturedComponent implements OnInit {
    @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
