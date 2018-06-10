import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import { ProductListComponent } from './products/product-list.component';

/**
 * BrowserModule:imports Says This Component Is Available To All Other Component Of AppModule
 * AppComponent:declarations Says This Component Is Part Of AppModule
 * AppComponent:bootstrap StartUp Compoment Which Contains Selector Used In index.html
 */
@NgModule({
  imports:[BrowserModule,FormsModule],
  bootstrap:[AppComponent],
  declarations:[AppComponent,ProductListComponent]
})
export class AppModule{}
