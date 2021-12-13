import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderRowComponent } from './components/home-page/header-row/header-row.component';
import { SliderRowComponent } from './components/home-page/slider-row/slider-row.component';
import { ProductsRowComponent } from './components/home-page/products-row/products-row.component';
import {MnFullpageModule} from 'ngx-fullpage';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomePageComponent,
    HeaderRowComponent,
    SliderRowComponent,
    ProductsRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollCoreModule.forRoot({duration: 500}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
