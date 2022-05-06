import { ChangeDetectionStrategy, Component, Input, OnInit, Optional } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SpeakersFacade } from 'src/app/facades/speakers.facade';
import { Speaker } from 'src/app/store/store.interfaces';
import { SpeakerViewComponent } from '../speaker-view/speaker-view.component';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerCardComponent implements OnInit {
  @Input() public id: number;
  @Input() public button = false;
  @Input() public safeArea = false;

  public speaker$: Observable<Speaker>;

  constructor(
    private speakersFacade: SpeakersFacade,
    private modalController: ModalController,
    @Optional() private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    this.speaker$ = this.speakersFacade.getSpeakerById(this.id);
  }

  async presentModal() {
    if (!this.button) {
      return;
    }

    console.time('SpeakerCardComponent.presentModal');

    const modal = await this.modalController.create({
      component: SpeakerViewComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.parentOutlet.nativeEl,
      componentProps: {
        id: this.id,
      },
    });

    await modal.present();

    console.timeEnd('SpeakerCardComponent.presentModal');
  }

}
