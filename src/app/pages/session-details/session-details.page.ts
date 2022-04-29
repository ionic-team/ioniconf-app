import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AgendaFacade } from 'src/app/facades/agenda.facade';
import { ReminderService } from 'src/app/services/reminder.service';
import { Session } from 'src/app/store/store.interfaces';
import { CoreConstants } from 'src/app/util/core.constants';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.page.html',
  styleUrls: ['./session-details.page.scss'],
})
export class SessionDetailsPage implements OnInit {
  public session$: Observable<Session>;
  public photoUrls: string[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public CoreConstants = CoreConstants;

  constructor(
    public agendaFacade: AgendaFacade,
    private route: ActivatedRoute,
    private reminderService: ReminderService,
    private toastController: ToastController
  ) {
    const sessionId = Number(this.route.snapshot.paramMap.get('sessionId'));
    this.session$ = this.agendaFacade.getSession(sessionId);
  }

  ngOnInit(): void {
    this.session$.subscribe((session) => {
      this.photoUrls = session.speakers.map((speaker) => speaker.photoUrl);
    });
  }

  async setReminder(session: Session) {
    await this.reminderService.scheduleReminder(session);

    // set reminder for 5 minutes before!
    const toast = await this.toastController.create({
      message: `Reminder set for ${CoreConstants.minutesBefore} minutes before the talk begins`,
      duration: 2000,
      color: 'primary',
    });

    await toast.present();
  }

  async triggerBrowser() {
    await Browser.open({
      url: CoreConstants.eventUrl,
    });
  }
}
