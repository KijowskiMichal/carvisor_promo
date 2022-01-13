import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {MainService} from '../main/main.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('third') third!: ElementRef;

  rowsPosition = [0, 0, 0];
  rows = [this.first, this.second, this.third];

  constructor(public mainService: MainService, private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.mainService.scrollToProducts.subscribe(() => {
      this.scrollToProducts();
    });
    this.mainService.scrollToSlider.subscribe(() => {
      this.scrollToSlider();
    });
  }


  ngAfterViewInit(): void {
    this.rowsPosition[0] = this.first.nativeElement.getBoundingClientRect().y;
    this.rowsPosition[1] = this.second.nativeElement.getBoundingClientRect().y;
    this.rowsPosition[2] = this.third.nativeElement.getBoundingClientRect().y;
    this.rows = [this.first, this.second, this.third];
  }

  scrollToProducts(): void {
    if (this.deviceService.isDesktop()) {
      this.rows[2].nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    else {
      this.rows[2].nativeElement.scrollIntoView();
    }
  }

  scrollToSlider(): void {
    if (this.deviceService.isDesktop()) {
      this.rows[1].nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    else {
      this.rows[1].nativeElement.scrollIntoView();
    }
  }
}

