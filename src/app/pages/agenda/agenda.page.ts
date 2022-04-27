import { Component, OnInit } from '@angular/core';
import { AgendaFacade } from 'src/app/facades/agenda.facade';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { Session } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  constructor(
    public eventFacade: IonicEventFacade,
    public agendaFacade: AgendaFacade
  ) {}

  ngOnInit() {
    this.eventFacade.eventLoaded$.subscribe((loaded) => {
      if (loaded) {
        this.agendaFacade.loadSessionsData();
      }
    });
  }

  trackItems(index: number, itemObject: Session) {
    return itemObject.id;
  }
}
