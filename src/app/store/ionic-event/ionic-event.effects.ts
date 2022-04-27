import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { PrismicService } from 'src/app/services/prismic.service';
import { eventActions } from './ionic-event.actions';

@Injectable()
export class IonicEventEffects {
  constructor(
    private actions$: Actions,
    private prismicService: PrismicService
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loadEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventActions.loadEvent),
      switchMap(() =>
        this.prismicService.loadData().pipe(
          map((event) =>
            // console.log(event);
            eventActions.loadEventSuccess({ event })
          )
          // catchError((e: ApiError) =>
          //   of(
          //     eventActions.loadEventError({
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
