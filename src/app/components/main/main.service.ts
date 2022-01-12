import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  darkMode = new EventEmitter<boolean>();
  scrollToProducts = new EventEmitter<void>();
  scrollToSlider = new EventEmitter<void>();

  constructor() {
    this.darkMode.next(false);
  }
}
