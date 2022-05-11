import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private prefersDarkSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.prefersDarkSubject.next(this.mqlDark.matches);
    this.setupSubs();
  }

  public get isDark() {
    return this.prefersDarkSubject.value;
  }

  private get mqlDark() {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }

  private setupSubs() {
    try {
      this.mqlDark.addEventListener('change', (evt) => {
        this.prefersDarkSubject.next(evt.matches);
      });
    } catch (mqlError) {
      console.log(mqlError);
      this.mqlDark.addListener((evt) => {
        this.prefersDarkSubject.next(evt.matches);
      });
    }
  }
}
