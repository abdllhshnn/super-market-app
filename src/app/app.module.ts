import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './component/market/market.component';
import { AddSectionModalComponent } from './component/add-section-modal/add-section-modal.component';
import { AddProductModalComponent } from './component/add-product-modal/add-product-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {MarketService} from './core/market.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopbarComponent } from './component/topbar/topbar.component';
import { UpdatedProductModalComponent } from './component/updated-product-modal/updated-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    AddSectionModalComponent,
    AddProductModalComponent,
    TopbarComponent,
    UpdatedProductModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    MarketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
