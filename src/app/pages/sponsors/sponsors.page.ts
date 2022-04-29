import { Component, OnInit } from '@angular/core';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { SponsorsFacade } from 'src/app/facades/sponsors.facade';
import { Sponsor, SponsorTier } from 'src/app/store/store.interfaces';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {
  public platinumSponsors: Sponsor[] = [];
  public goldSponsors: Sponsor[] = [];
  public silverSponsors: Sponsor[] = [];
  public bronzeSponsors: Sponsor[] = [];

  constructor(
    private eventFacade: IonicEventFacade,
    public sponsorsFacade: SponsorsFacade
  ) {}

  ngOnInit() {
    this.eventFacade.eventLoaded$.subscribe((loaded) => {
      if (loaded) {
        this.sponsorsFacade.loadSponsorsData();
      }
    });

    this.sponsorsFacade.sponsors$.subscribe((sponsors) => {
      sponsors.forEach((sponsor) => {
        switch (sponsor.tier) {
          case SponsorTier.PLATINUM:
            this.platinumSponsors = [...this.platinumSponsors, sponsor];
            break;
          case SponsorTier.GOLD:
            this.goldSponsors = [...this.goldSponsors, sponsor];
            break;
          case SponsorTier.SILVER:
            this.silverSponsors = [...this.silverSponsors, sponsor];
            break;
          case SponsorTier.BRONZE:
            this.bronzeSponsors = [...this.bronzeSponsors, sponsor];
            break;
          default:
            break;
        }
      });
    });
  }
}
