import { Component, OnInit } from '@angular/core';
import {
  IonRouterOutlet,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { SwagFormComponent } from 'src/app/components/swag-form/swag-form.component';

@Component({
  selector: 'app-swag',
  templateUrl: './swag.page.html',
  styleUrls: ['./swag.page.scss'],
})
export class SwagPage implements OnInit {
  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {}

  async openSwagModal() {
    // await Browser.open({
    //   url: CoreConstants.swagformUrl,
    // });

    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SwagFormComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {},
    });

    modal.onDidDismiss().then((result) => {
      // Data will be undefined if modal was swiped closed or back button used
      if (result.data) {
        this.presentToast();
      }
    });

    return await modal.present();
  }

  private async presentToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Thanks! Winners will be notified by email.',
      duration: 2000,
      color: 'primary',
    });

    await toast.present();
  }
}
