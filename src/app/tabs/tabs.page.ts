import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { PermissionsComponent } from '../components/permissions/permissions.component';
import { PushNotificationService } from '../services/push-notification.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public selectedTab = 'agenda';
  public buttons = [
    { title: 'Agenda', value: 'agenda', icon: 'calendar' },
    { title: 'Speakers', value: 'speakers', icon: 'users' },
    // { title: 'Sponsors', value: 'sponsors', icon: 'star' },
    { title: 'Swag', value: 'swag', icon: 'shirt' },
  ];

  constructor(
    private pushService: PushNotificationService,
    private storageService: StorageService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.initPushNotes();
  }

  public onTabsWillChange(evt: any) {
    this.selectedTab = evt.tab;
  }

  public async initPushNotes() {
    // Call register every time the app launches
    // Show permission prompt the first time app is launched
    if (Capacitor.isNativePlatform()) {
      const permStatus = await this.pushService.checkPermissionStatus();

      if (permStatus === 'granted') {
        // On Android, permission is granted automatically
        await this.pushService.registerPush();
      } else if (
        permStatus === 'prompt' &&
        !(await this.storageService.getPushNotesRequested())
      ) {
        // On iOS, ask the user for permission first. only once.
        await this.storageService.setPushNotesRequested(true);

        const modal = await this.modalController.create({
          component: PermissionsComponent,
          initialBreakpoint: 1,
          breakpoints: [0, 1],
          cssClass: 'permissions-modal',
        });
        return await modal.present();
      }
    }
  }
}
