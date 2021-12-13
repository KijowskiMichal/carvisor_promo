import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  darkMode = new EventEmitter<boolean>();

  constructor() {
    this.darkMode.next(false);
  }
}
