import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
/**selector: 'pm-product-detail',:Only Needed If We Create Nested View,But Here We Create Routing*/
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail"
  product: IProduct;
  constructor(private _route: ActivatedRoute,
    private _router: Router) {
    console.log('Id Passed:', this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    //Convert String Id To Numeric One
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
