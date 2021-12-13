import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faLightbulb, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  darkMode = true;
  faLightbulb: IconDefinition = faLightbulb;

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.darkMode.subscribe((value) => {
      this.darkMode = value;
    });
  }

  changeMode(): void {
    this.mainService.darkMode.next(!this.darkMode);
  }
}
