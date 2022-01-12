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

  milisFromLastEvent = 0;
  currentRow = 0;
  rowsPosition = [0, 0, 0];
  rows = [this.first, this.second, this.third];
  block = false;

  @HostListener('window:scroll', []) onWindowScroll(): void {
    if ((!this.block) && (this.deviceService.isDesktop())) {
      this.block = true;
      const verticalOffset = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;
      try {
        if (verticalOffset > this.rowsPosition[this.currentRow]) {
          this.currentRow = this.currentRow + 1;
        } else if (verticalOffset < this.rowsPosition[this.currentRow]) {
          this.currentRow = this.currentRow - 1;
        }
      } catch (error) {
      }
      setTimeout(() => {
        this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
      }, 200);
      setTimeout(() => {
        this.checkPositionAndFix();
      }, 400);
      setTimeout(() => {
        this.block = false;
      }, 800);
    }
  }

  constructor(public mainService: MainService, private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.mainService.scrollToProducts.subscribe(() => {
      this.scrollToProducts();
    });
    this.mainService.scrollToSlider.subscribe(() => {
      this.scrollToSlider();
    });
  }

  checkPositionAndFix(): void {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    if (verticalOffset !== this.rowsPosition[this.currentRow]) {
      this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  ngAfterViewInit(): void {
    this.rowsPosition[0] = this.first.nativeElement.getBoundingClientRect().y;
    this.rowsPosition[1] = this.second.nativeElement.getBoundingClientRect().y;
    this.rowsPosition[2] = this.third.nativeElement.getBoundingClientRect().y;
    this.rows = [this.first, this.second, this.third];
  }

  scrollToProducts(): void {
    if ((!this.block) && (this.deviceService.isDesktop())) {
      this.block = true;
      this.currentRow = 2;
      this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
      setTimeout(() => {
        this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
      }, 200);
      setTimeout(() => {
        this.checkPositionAndFix();
      }, 400);
      setTimeout(() => {
        this.block = false;
      }, 800);
    }
    if (!this.deviceService.isDesktop()) {
      this.rows[2].nativeElement.scrollIntoView();
    }
  }

  scrollToSlider(): void {
    if ((!this.block) && (this.deviceService.isDesktop())) {
      this.block = true;
      this.currentRow = 1;
      this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
      setTimeout(() => {
        this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
      }, 200);
      setTimeout(() => {
        this.checkPositionAndFix();
      }, 400);
      setTimeout(() => {
        this.block = false;
      }, 800);
    }
    if (!this.deviceService.isDesktop()) {
      this.rows[1].nativeElement.scrollIntoView();
    }
  }
}

