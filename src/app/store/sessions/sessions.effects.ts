import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { sessionsActions } from './sessions.actions';

@Injectable()
export class SessionsEffects {
  constructor(
    private actions$: Actions,
    private eventFacade: IonicEventFacade
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loadSessions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sessionsActions.loadSessions),
      switchMap((action) =>
        this.eventFacade.event$.pipe(
          map((event) =>
            sessionsActions.loadSessionsSuccess({ sessions: event.sessions })
          )
          // catchError((e: ApiError) =>
          //   of(
          //     sessionsActions.loadSessionsError({
          //       code: e.code,
          //       message: e.message,
          //     })
          //   )
          // )
        )
      )
    )
  );
}
