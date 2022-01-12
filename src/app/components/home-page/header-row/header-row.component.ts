import { Component, OnInit } from '@angular/core';
import {MainService} from '../../main/main.service';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {

  darkmode = true;

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.darkMode.subscribe((value) => {
      this.darkmode = value;
    });
  }

  showMore(): void {
    this.mainService.scrollToSlider.next();
  }
}
