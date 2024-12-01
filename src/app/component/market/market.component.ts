import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MarketService } from '../../core/market.service';
import { Markets } from '../../core/market.model';
import {of} from 'rxjs';

@Component({
  selector: 'app-market',
  standalone: false,
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit, OnChanges {

  @Input()
  filteredMarkets!: any;

  markets: Markets = {};

  constructor(private service: MarketService) {}

  ngOnInit() {
    const data = this.service.getMarkets();

    if (this.filteredMarkets){
      this.markets = this.filteredMarkets;
    } else {
      this.markets = data
    }
  }



  deleteSection(sectionName: any, key: string) {

    this.service.deleteSection(key, sectionName );
  }

  ngOnChanges(changes: SimpleChanges) {
    const data = this.service.getMarkets();

    if (this.filteredMarkets){
      this.markets = this.filteredMarkets;
    } else {
      this.markets = data
    }
  }


}
