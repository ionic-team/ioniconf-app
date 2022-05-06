import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
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

  public speaker$: Observable<Speaker>;

  constructor(public speakersFacade: SpeakersFacade) {}

  ngOnInit() {
    this.speaker$ = this.speakersFacade.getSpeakerById(this.id);
  }

  async openLink(url: string) {
    await Browser.open({ url });
  }
}
