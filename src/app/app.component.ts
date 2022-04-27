import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
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
    console.log('App: Initialization');
    if (Capacitor.isNativePlatform()) {
      /**
       * To make sure we provide the fastest app loading experience for our
       * users, hide the splash screen automatically when the app is ready to
       * be used:
       * https://capacitorjs.com/docs/apis/splash-screen#hiding-the-splash-screen
       */
      SplashScreen.hide();
    }
  }

  ngOnInit() {
    console.log('App: ngOnInit');
    this.eventFacade.loadEvent();
  }
}
