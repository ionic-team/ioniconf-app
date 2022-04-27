import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Observable } from 'rxjs';
import { SponsorsFacade } from 'src/app/facades/sponsors.facade';
import { Sponsor } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent implements OnInit {
  @Input() id: number;
  @Input() button = false;

  public sponsor$: Observable<Sponsor>;

  constructor(public sponsorsFacade: SponsorsFacade) {}

  ngOnInit() {
    this.sponsor$ = this.sponsorsFacade.getSponsorById(this.id);
  }

  async openLink(url: string) {
    await Browser.open({ url });
  }
}
