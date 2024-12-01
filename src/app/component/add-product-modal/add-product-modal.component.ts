import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MarketService} from '../../core/market.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-product-modal',
  standalone: false,
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.scss'
})
export class AddProductModalComponent implements OnInit {
  @Input()
  sectionName!: string;

  @Input()
  marketKey!: string;

  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    section: new FormControl('', Validators.required),
  })

  constructor(private service: MarketService) {
  }

  ngOnInit() {
    this.productForm.get('section')?.setValue(this.sectionName);
  }

  addProduct() {
    const value = this.productForm.value;

    if (this.productForm.valid) {
      console.log(this.marketKey)
      this.service.addProduct(this.marketKey, this.sectionName, value);
      this.productForm.get('productName')?.reset('');
    }
  }
}
