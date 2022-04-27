import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { eventActions } from '../store/ionic-event/ionic-event.actions';
import { IonicEventState } from '../store/ionic-event/ionic-event.interfaces';
import { eventQuery } from '../store/ionic-event/ionic-event.selectors';
import { IonicEvent } from '../store/store.interfaces';

@Injectable({ providedIn: 'root' })
export class IonicEventFacade {
  public event$: Observable<IonicEvent> = this.store.select(
    eventQuery.getEvent
  );
  public eventLoading$ = this.store.select(eventQuery.eventLoading);
  public eventLoaded$ = this.store.select(eventQuery.eventLoaded);

  constructor(private store: Store<IonicEventState>) {}

  public loadEvent = (): void => this.store.dispatch(eventActions.loadEvent());
}
