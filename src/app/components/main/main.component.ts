import { Component, OnInit } from '@angular/core';
import {faLightbulb, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  darkMode = true;
  faLightbulb: IconDefinition = faLightbulb;

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(): void {
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
  }
}
