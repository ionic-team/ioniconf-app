import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { speakersActions } from '../store/speakers/speakers.actions';
import { SpeakersState } from '../store/speakers/speakers.interfaces';
import { speakersQuery } from '../store/speakers/speakers.selectors';
import { Speaker } from '../store/store.interfaces';

@Injectable({ providedIn: 'root' })
export class SpeakersFacade {
  public speakers$: Observable<Speaker[]> = this.store.select(
    speakersQuery.getSpeakers
  );
  public speakersLoading$ = this.store.select(speakersQuery.speakersLoading);
  public speakersLoaded$ = this.store.select(speakersQuery.speakersLoaded);

  constructor(private store: Store<SpeakersState>) {}

  public loadSpeakersData = (): void =>
    this.store.dispatch(speakersActions.loadSpeakers());

  public getSpeakerById = (id: number): Observable<Speaker> =>
    this.store.select(speakersQuery.getSpeakerById(id));
}
