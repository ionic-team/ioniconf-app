import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SpeakersFacade } from 'src/app/facades/speakers.facade';
import { Speaker } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-speaker-view',
  templateUrl: './speaker-view.component.html',
  styleUrls: ['./speaker-view.component.scss'],
})
export class SpeakerViewComponent implements OnInit {
  @Input() public id: number;

  public isDark = false;
  public showClose = true;
  public speaker$: Observable<Speaker>;

  constructor(
    public modalController: ModalController,
    private platform: Platform,
    public speakersFacade: SpeakersFacade
  ) {}

  ngOnInit() {
    this.showClose = !this.platform.platforms().includes('ios');
    this.speaker$ = this.speakersFacade.getSpeakerById(this.id);

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.isDark = true;
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        this.isDark = event.matches;
        console.log(this.isDark);
      });
  }

  async openLink(url: string) {
    await Browser.open({ url });
  }
}
