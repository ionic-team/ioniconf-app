import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sessionsActions } from '../store/sessions/sessions.actions';
import { SessionsState } from '../store/sessions/sessions.interfaces';
import { sessionsQuery } from '../store/sessions/sessions.selectors';
import { Session } from '../store/store.interfaces';

@Injectable({ providedIn: 'root' })
export class AgendaFacade {
  public sessions$: Observable<Session[]> = this.store.select(
    sessionsQuery.getSessions
  );
  public sessionsLoading$ = this.store.select(sessionsQuery.sessionsLoading);
  public sessionsLoaded$ = this.store.select(sessionsQuery.sessionsLoaded);

  constructor(private store: Store<SessionsState>) {}

  public loadSessionsData = (): void =>
    this.store.dispatch(sessionsActions.loadSessions());

  public getSession = (id: number): Observable<Session> =>
    this.store.select(sessionsQuery.getSessionById(id));
}
