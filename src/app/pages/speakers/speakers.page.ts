import { Component, OnInit } from '@angular/core';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { SpeakersFacade } from 'src/app/facades/speakers.facade';
import { Speaker } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  constructor(
    public eventFacade: IonicEventFacade,
    public speakersFacade: SpeakersFacade
  ) {}

  ngOnInit() {
    this.eventFacade.eventLoaded$.subscribe((loaded) => {
      console.log(loaded);
      if (loaded) {
        this.speakersFacade.loadSpeakersData();
      }
    });
  }

  trackItems(index: number, itemObject: Speaker) {
    return itemObject.id;
  }
}
