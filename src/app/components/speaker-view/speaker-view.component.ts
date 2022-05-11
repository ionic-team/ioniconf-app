import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SpeakersFacade } from 'src/app/facades/speakers.facade';
import { ThemeService } from 'src/app/services/theme.service';
import { Speaker } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-speaker-view',
  templateUrl: './speaker-view.component.html',
  styleUrls: ['./speaker-view.component.scss'],
})
export class SpeakerViewComponent implements OnInit {
  @Input() public id: number;

  public showClose = true;
  public speaker$: Observable<Speaker>;

  constructor(
    public modalController: ModalController,
    public speakersFacade: SpeakersFacade,
    public themeService: ThemeService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.showClose = !this.platform.platforms().includes('ios');
    this.speaker$ = this.speakersFacade.getSpeakerById(this.id);
  }

  async openLink(url: string) {
    await Browser.open({ url });
  }
}
