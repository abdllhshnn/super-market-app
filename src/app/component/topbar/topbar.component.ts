import {Component, OnInit} from '@angular/core';
import {MarketService} from '../../core/market.service';
import {ProductModel, SectionModel} from '../../core/market.model';
import {CurrencyService} from '../../core/currency.service';

@Component({
  selector: 'app-topbar',
  standalone: false,

  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent  implements OnInit{
  searchQuery: string = '';
  markets: any = {};
  filteredMarkets: any = {};
  currencyToTRY: Array<{ currency: string; value: number }> = [];


  constructor(private marketService: MarketService, private currencyService: CurrencyService) {
    this.loadMarkets();
  }

  ngOnInit() {
    this.loadExchangeRates();

  }

  loadMarkets() {
    this.markets = this.marketService.getMarkets();
    this.filteredMarkets = this.markets;
  }

  filterMarkets() {
    const query = this.searchQuery.toLowerCase();

    this.filteredMarkets = {
      marketA: this.markets.marketA.filter((section: SectionModel) =>
        section.sectionName.toLowerCase().includes(query) ||
        section.sectionType.toLowerCase().includes(query) ||
        section.products.some((product: ProductModel) =>
          product.productName.toLowerCase().includes(query)
        )
      ),
      marketB: this.markets.marketB.filter((section: SectionModel) =>
        section.sectionName.toLowerCase().includes(query) ||
        section.sectionType.toLowerCase().includes(query) ||
        section.products.some((product: ProductModel) =>
          product.productName.toLowerCase().includes(query)
        )
      ),
    };
  }

  searchByTerm(event: any) {
    this.searchQuery = event.target.value.toLowerCase();
    console.log(this.searchQuery);
    this.filterMarkets()
    console.log(this.filteredMarkets)

  }

  loadExchangeRates() {
    this.currencyService.getExchangeRates().subscribe((data) => {

      this.currencyToTRY = [
        { currency: '$', value: 1 / data.rates.USD },
        { currency: '€', value: 1 / data.rates.EUR },
        { currency: '£', value: 1 / data.rates.GBP }
      ];
    });
  }
}
