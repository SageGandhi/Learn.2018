import {Component} from '@angular/core'
@Component({
  selector:"pm-root",
  template:`<div><h4>{{pageTitle}} From Scratch.</h4></div>`
})
export class AppComponent{
  pageTitle:string = 'Prajit Learns Angular';
}
