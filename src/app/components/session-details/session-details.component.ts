import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AgendaFacade } from 'src/app/facades/agenda.facade';
import { ReminderService } from 'src/app/services/reminder.service';
import { Session } from 'src/app/store/store.interfaces';
import { CoreConstants } from 'src/app/util/core.constants';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  @Input() public sessionId: number;

  public session$: Observable<Session>;
  public photoUrls: string[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public CoreConstants = CoreConstants;

  constructor(
    public agendaFacade: AgendaFacade,
    private reminderService: ReminderService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.session$ = this.agendaFacade.getSession(this.sessionId);

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
