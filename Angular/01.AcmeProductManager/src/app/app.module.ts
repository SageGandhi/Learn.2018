import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
/**
 * BrowserModule:imports Says This Component Is Available To All Other Component Of AppModule
 * AppComponent:declarations Says This Component Is Part Of AppModule
 * AppComponent:bootstrap StartUp Compoment Which Contains Selector Used In index.html
 * ProductService:Provided To All Component Of This Module,
 * HttpService  Provider Registered In HttpClientModule
 */
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    WelcomeComponent
  ]
})
export class AppModule { }
