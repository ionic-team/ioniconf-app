import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Deploy } from 'cordova-plugin-ionic';
import { IonicEventFacade } from './facades/ionic-event.facade';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public eventFacade: IonicEventFacade) {
    this.initializeApp();
  }

  initializeApp() {
    if (Capacitor.isNativePlatform()) {
      /**
       * To make sure we provide the fastest app loading experience for our
       * users, hide the splash screen automatically when the app is ready to
       * be used:
       * https://capacitorjs.com/docs/apis/splash-screen#hiding-the-splash-screen
       */
      SplashScreen.hide();
    }

    this.performAutomaticUpdate();
  }

  ngOnInit() {
    this.eventFacade.loadEvent();
  }

  private async performAutomaticUpdate() {
    try {
      const currentVersion = await Deploy.getCurrentVersion();
      const resp = await Deploy.sync(
        { updateMethod: 'auto' },
        (percentDone) => {
          console.log(`Update is ${percentDone}% done!`);
        }
      );
      if (!currentVersion || currentVersion.versionId !== resp.versionId) {
        console.log(
          'We found an update, and are in process of redirecting you!'
        );
      } else {
        console.log('No update available.');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
