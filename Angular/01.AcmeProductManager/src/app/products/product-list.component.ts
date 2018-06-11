import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
//For Nestable Component We Need To Define A Selector,For Routing We Do Not Need
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /***Structural Directive Start With A * Like *ngIf/*ngFor,BrowserModule Expose These Directives.For In Loop ,We Iterate Over [In]dex,
   * For Of Loop We Iterate Over Objects,[]:Used For Property Binding,():Used For Event Binding,Two Way Binding Via[()]*/
  pageTitle: string = "Product List";
  imageWidth: number = 25;
  imageMarginWidth: number = 2;
  showImage: boolean = false;
  _listFilter: string = '';
  dataFromChildComponent: string = '';
  filteredProducts: IProduct[];
  products: IProduct[];
  errorMessage: string;
  //Same As Creating Local Variable _productService  & Set It In Constructor
  constructor(private _productService: ProductService) {
    console.log('Constructor Invoked Before NgOnInit');
  }
  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      products => {
        //Due To Async Call
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
    console.log('NgOnInit Invoked After Constructor');
  }
  onOutputFromNestedChild(data: string): void {
    console.log(`Nested Child Component Pass Following Data:${data}`);
    this.dataFromChildComponent = `-Nested Child Component Pass Following Data:${data}`;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  filteredProductsByCriteria(criteria: string): IProduct[] {
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(criteria.toLocaleLowerCase()) != -1);
  }
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filteredProductsByCriteria(this.listFilter) : this.products;
  }
}
