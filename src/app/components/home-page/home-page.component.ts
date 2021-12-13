import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {

  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('third') third!: ElementRef;

  milisFromLastEvent = 0;
  currentRow = 0;
  rowsPosition = [0, 0, 0];
  rows = [this.first, this.second, this.third];
  block = false;

  @HostListener('window:scroll', []) onWindowScroll(): void {
    if (!this.block) {
      console.log("hłe hłe")
      this.block = true;
      const verticalOffset = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;
      try {
        if (verticalOffset > this.rowsPosition[this.currentRow]) {
          this.currentRow = this.currentRow + 1;
          //this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
          console.log('to next');
        } else if (verticalOffset < this.rowsPosition[this.currentRow]) {
          this.currentRow = this.currentRow - 1;
          //this.rows[this.currentRow].nativeElement.scrollIntoView({behavior: 'smooth'});
          console.log('to previous');
        }
        console.log(this.currentRow);
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

}

