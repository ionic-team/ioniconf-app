import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import * as prismicH from '@prismicio/helpers';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  public rules: any;

  constructor(
    private modalController: ModalController,
    public eventFacade: IonicEventFacade
  ) {}

  ngOnInit() {
    this.eventFacade.event$.subscribe((event) => {
      this.rules = prismicH.asHTML(event.swagRules);
    });
  }

  async dismiss() {
    await this.modalController.dismiss();
  }
}
