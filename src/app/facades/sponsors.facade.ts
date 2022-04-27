import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sponsorsActions } from '../store/sponsors/sponsors.actions';
import { SponsorsState } from '../store/sponsors/sponsors.interfaces';
import { sponsorsQuery } from '../store/sponsors/sponsors.selectors';
import { Sponsor } from '../store/store.interfaces';

@Injectable({ providedIn: 'root' })
export class SponsorsFacade {
  public sponsors$: Observable<Sponsor[]> = this.store.select(
    sponsorsQuery.getSponsors
  );
  public sponsorsLoading$ = this.store.select(sponsorsQuery.sponsorsLoading);
  public sponsorsLoaded$ = this.store.select(sponsorsQuery.sponsorsLoaded);

  constructor(private store: Store<SponsorsState>) {}

  public loadSponsorsData = (): void =>
    this.store.dispatch(sponsorsActions.loadSponsors());

  public getSponsorById = (id: number): Observable<Sponsor> =>
    this.store.select(sponsorsQuery.getSponsorById(id));
}
