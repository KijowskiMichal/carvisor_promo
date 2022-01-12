import {Component, OnDestroy, OnInit} from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {MainService} from '../../main/main.service';
import {Subscription} from 'rxjs';

export interface SliderPage {
  title: string;
  message: string;
  image: string;
  short: string;
}

@Component({
  selector: 'app-slider-row',
  templateUrl: './slider-row.component.html',
  styleUrls: ['./slider-row.component.scss']
})
export class SliderRowComponent implements OnInit, OnDestroy {
  mainSubscription!: Subscription;

  slides: SliderPage[] = [
    {
      title: 'Lorem ipsum dolor sid amet',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '../assets/image_1.png',
      short: 'Pierwszy',
    },
    {
      title: ' Ipsum dolor sid amet sid dolor ipsum lorem',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      image: '../assets/image_2.png',
      short: 'Drugi',
    }
  ];

  actPage = 0;
  darkmode = true;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainSubscription = this.mainService.darkMode.subscribe((value) => {
      this.darkmode = value;
    });
  }

  next(): void {
    if (this.actPage === (this.slides.length - 1)) {
      this.actPage = 0;
    }
    else {
      this.actPage = this.actPage + 1;
    }
  }

  prev(): void {
    if (this.actPage === 0) {
      this.actPage = this.slides.length - 1;
    }
    else {
      this.actPage = this.actPage - 1;
    }
  }

  choose(index: number): void {
    this.actPage = index;
  }

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }

}
