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
      title: 'Czym jest CarVisor?',
      message: 'CarVisor to rozbudowany system kontroli floty przeznaczony dla małych i średnich firm oraz użytkowników prywatnych, pozwalający na monitoring pojazdów w czasie rzeczywistym oraz podgląd danych historycznych. Nasi klienci zyskają możliwość rejestrowania najważniejszych parametrów pojazdu, lokalizację oraz historię przebytych tras. Jest to projekt Open Source na licencji GNU GPLv3. Zbuduj własne urządzenie, pobierz potrzebne pliki i zacznij korzystać z CarVisor!',
      image: '../assets/image_2.png',
      short: 'CarVisor',
    },
    {
      title: 'Wiele korzyści za niewygórowaną cenę',
      message: 'Koszty wdrożenia konkurencyjnych systemów kontroli floty są duże, środowisko takiej architektury jest zamknięte, co utrudnia integrację z innymi systemami. CarVisor oferuje modułową budowę, użytkownik może dostosować urządzenie do swoich potrzeb, dodatkowo dzięki otwartości projektu, pozwala on na zintegrowanie go z innymi aplikacjami dzięki przygotowanemu API. W przeciwieństwie do większości konkurencyjnych systemów nasz projekt nastawiony jest również na użytkowników prywatnych, którzy chcieliby mieć większą kontrolę nad swoim pojazdem.',
      image: '../assets/image_1.png',
      short: 'Otwartość',
    },
    {
      title: 'Z nami oszczędzisz pieniądze',
      message: 'Nasi klienci dzięki ciągłemu monitorowaniu techniki jazdy będą mogli się cieszyć oszczędnością pieniędzy związaną z mniejszymi kosztami paliwa i będą mieli pełny podgląd na prędkość, obroty, przebieg, lokalizację oraz błędy pojazdu. Dzięki otwartości i modularnej budowie systemu będą mieli możliwość dostosowania naszego projektu pod własne potrzeby, uruchomienie aplikacji serwerowej na własnych systemach, bez przymusu uzależniania się od usług innych firm.',
      image: '../assets/image_3.png',
      short: 'Oszczędność',
    },
    {
      title: 'Funkcjonalne dla firm i użytkowników prywatnych',
      message: 'Kierujemy nasz system głównie do firm, które nie posiadają żadnego systemu kontroli floty lub wykorzystują drogie, komercyjne rozwiązania i szukają korzystniejszego cenowo produktu. Naszym celem jest stworzenie produktu który będzie dorównywał a nawet przewyższał w liczbie funkcjonalności konkurencje, wszystko to przy zachowaniu niskich kosztów nabycia i utrzymania całej platformy.',
      image: '../assets/image_4.png',
      short: 'Funkcjonalność',
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
