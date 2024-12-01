import {Injectable} from '@angular/core';
import {Markets} from './market.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private markets: Markets = {
    marketA: [
      {
        sectionName: 'R1',
        sectionType: 'Gıda',
        products: [
          {id: 1, productName: 'Ekmek', section: 'Gıda'},
          {id: 2, productName: 'Süt', section: 'Gıda'},
          {id: 3, productName: 'Peynir', section: 'Gıda'},
          {id: 4, productName: 'Zeytin', section: 'Gıda'}
        ],
      },

    ],
    marketB: [
      {
        sectionName: 'R1',
        sectionType: 'Gıda',
        products: [
          {id: 1, productName: 'Ekmek', section: 'Gıda'},
          {id: 2, productName: 'Süt', section: 'Gıda'},
          {id: 3, productName: 'Peynir', section: 'Gıda'},
          {id: 4, productName: 'Zeytin', section: 'Gıda'}
        ],
      },
      {
        sectionName: 'R2',
        sectionType: 'Temizlik',
        products: [
          {id: 1, productName: 'Çamaşır Deterjanı', section: 'Temizlik'},
          {id: 2, productName: 'Bulaşık Deterjanı', section: 'Temizlik'},
        ],
      },
      {
        sectionName: 'R3',
        sectionType: 'Kişisel Bakım',
        products: [
          {id: 1, productName: 'Diş Macunu', section: 'Kişisel Bakım'},
          {id: 2, productName: 'Diş Fırçası', section: 'Kişisel Bakım'},
        ],
      },
    ],
  };

  getMarkets(): Markets {
    return this.markets;
  }

  addSection(market: string, section: any): void {
    const newSection = {
      ...section,
      products: section.products || [],
    };

    if (this.markets[market]) {
      this.markets[market].push(newSection);
    } else {
      this.markets[market] = [newSection];
    }
  }

  addProduct(marketKey: string, sectionName: string, product: any): void {
    const market = this.markets[marketKey];
    console.log('market: ', market)

    if (!market) {
      console.error(`Market "${marketKey}" not found.`);
      return;
    }

    const section = market.find((section) => section.sectionName === sectionName);

    if (!section) {
      console.error(`Section "${sectionName}" not found in market "${marketKey}".`);
      return;
    }

    const maxId = section.products.reduce((max, prod) => Math.max(max, prod.id ?? 0), 0);

    const newProduct = {...product, id: maxId + 1};

    section.products.push(newProduct);

    console.log(`Product added to section "${sectionName}" in market "${marketKey}":`, newProduct);
  }


  deleteSection(market: string, sectionName: string): void {
    if (!this.markets[market]) {
      console.error(`Market "${market}" not found.`);
      return;
    }

    this.markets[market] = this.markets[market].filter(
      (dept) => dept.sectionName !== sectionName
    );

    console.log(`Section "${sectionName}" deleted from market "${market}".`);
  }
}
