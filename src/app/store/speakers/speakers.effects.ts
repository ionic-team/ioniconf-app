import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { speakersActions } from './speakers.actions';

@Injectable()
export class SpeakersEffects {
  constructor(
    private actions$: Actions,
    private eventFacade: IonicEventFacade
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loadSpeakers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(speakersActions.loadSpeakers),
      switchMap((action) =>
        this.eventFacade.event$.pipe(
          map((event) =>
            // console.log(event);
            speakersActions.loadSpeakersSuccess({
              speakers: event.speakers,
            })
          )
          // catchError((e: ApiError) =>
          //   of(
          //     speakersActions.loadSpeakersError({
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
