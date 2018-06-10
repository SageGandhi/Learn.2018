import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  maxWidth: number = 100.0;
  starWidth: number;
  /***Getting Input From Parent Container Component */
  @Input() rating: number;
  ngOnChanges(): void {
    this.starWidth = this.rating * this.maxWidth / 5.0;
  }
  /**Providing Output To Parent Container,Of String PayLoad*/
  @Output() output: EventEmitter<string> = new EventEmitter<string>();
  onClickStars(): void {
    this.output.emit(`Selected Product Have Rating:${this.rating}`);
  }
}
