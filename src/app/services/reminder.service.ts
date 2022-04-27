import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Session } from '../store/store.interfaces';
import { CoreConstants } from '../util/core.constants';
import { subMinutes } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  constructor(private ngZone: NgZone, public router: Router) {
    this.configure();
  }

  // Navigate the user to the talk they wanted to be reminded about
  async configure() {
    LocalNotifications.addListener(
      'localNotificationActionPerformed',
      (notification) => {
        this.ngZone.run(() => {
          this.router.navigate([
            `agenda/${notification.notification.extra.sessionId}`,
          ]);
        });
      }
    );
  }

  async scheduleReminder(session: Session) {
    // Set reminder 5 minutes before the talk begins
    const reminderDate: Date = subMinutes(
      session.startTime,
      CoreConstants.minutesBefore
    );

    // Schedule reminder
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'Talk starting soon!',
          body: session.title,
          schedule: { at: reminderDate },
          extra: {
            sessionId: session.id,
          },
        },
      ],
    });
  }
}
