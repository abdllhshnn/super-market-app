import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MarketService} from '../../core/market.service';
import {SectionModel} from '../../core/market.model';

@Component({
  selector: 'app-add-section-modal',
  standalone: false,
  templateUrl: './add-section-modal.component.html',
  styleUrl: './add-section-modal.component.scss'
})
export class AddSectionModalComponent implements OnInit{

  @Input()
  marketKey: string = '';

  sectionForm = new FormGroup({
    sectionName: new FormControl('', Validators.required),
    sectionType: new FormControl('Gıda', Validators.required),
    market: new FormControl('', Validators.required),
  });


  constructor(private service: MarketService) {
  }

  ngOnInit() {
    const markets = this.service.getMarkets();

    const market = markets[this.marketKey];

    this.departmentTypeCreator(market)

  }


  addDepartment() {
    const value = this.sectionForm.value;
    console.log('value : ', this.marketKey)

    this.service.addSection(this.marketKey, value)
  }

  departmentTypeCreator(market: SectionModel[]) {

    let newSectionName;

    market.map((department, index) => {
      if (department.sectionName === `R${index + 1}`){
        newSectionName = `R${index + 2}`
        this.sectionForm.get('sectionName')?.setValue(newSectionName);
        this.sectionForm.get('market')?.setValue(this.marketKey === 'marketA' ? 'A' : 'B');
      }
    });

  }

}
