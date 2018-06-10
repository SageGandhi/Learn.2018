import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
/**Used If This Service Has Some Dependency To Inject.If Registered With Provider,It Will Injected In Component & Child  Component.Provider Added To Module Metadata.*/
@Injectable()
export class ProductService {
  private _productsUrl = './api/products/products.json';
  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    //Until Subscribed Data Will Not Fetched
    return this._httpClient.get<IProduct[]>(this._productsUrl)
      .do(data => console.log('All:', JSON.stringify(data)))
      .catch(this.handleError);
  }
  handleError(err: HttpErrorResponse): Observable<IProduct[]> {
    console.log('All:', JSON.stringify(err));
    return Observable.throw(err.message);
  }
}
