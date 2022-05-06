import { Component, Input, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AgendaFacade } from 'src/app/facades/agenda.facade';
import { Session } from 'src/app/store/store.interfaces';
import { SessionDetailsComponent } from '../session-details/session-details.component';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input() public id: number;

  public session$: Observable<Session>;
  public photoUrls: string[] = [];

  constructor(
    private agendaFacade: AgendaFacade,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {
    this.session$ = this.agendaFacade.getSession(this.id);

    this.session$.subscribe((session) => {
      this.photoUrls = session.speakers.map((speaker) => speaker.photoUrl);
    });
  }

  async openAgendaItemModal(sessionId: number) {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SessionDetailsComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        sessionId,
      },
    });

    return await modal.present();
  }
}
