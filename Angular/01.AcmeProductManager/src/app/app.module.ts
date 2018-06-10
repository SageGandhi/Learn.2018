import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/ConvertToSpaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';

/**
 * BrowserModule:imports Says This Component Is Available To All Other Component Of AppModule
 * AppComponent:declarations Says This Component Is Part Of AppModule
 * AppComponent:bootstrap StartUp Compoment Which Contains Selector Used In index.html
 * ProductService:Provided To All Component Of This Module,
 * HttpService  Provider Registered In HttpClientModule
 */
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent, ProductListComponent, ConvertToSpaces, StarComponent, ProductDetailComponent],
  providers: [ProductService]
})
export class AppModule { }
