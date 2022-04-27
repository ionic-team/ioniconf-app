import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { sponsorsActions } from './sponsors.actions';

@Injectable()
export class SponsorsEffects {
  constructor(
    private actions$: Actions,
    private eventFacade: IonicEventFacade
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loadSponsors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sponsorsActions.loadSponsors),
      switchMap((action) =>
        this.eventFacade.event$.pipe(
          map((event) => {
            console.log(event);
            return sponsorsActions.loadSponsorsSuccess({
              sponsors: event.sponsors,
            });
          })
          // catchError((e: ApiError) =>
          //   of(
          //     sponsorsActions.loadSponsorsError({
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
