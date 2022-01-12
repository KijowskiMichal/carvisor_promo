import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../../main/main.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.scss']
})
export class ProductsRowComponent implements OnInit, OnDestroy {
  darkmode = true;
  mainSubscription!: Subscription;

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainSubscription = this.mainService.darkMode.subscribe((value) => {
      this.darkmode = value;
    });
  }

  ngOnDestroy(): void {
   this.mainSubscription.unsubscribe();
  }
}
