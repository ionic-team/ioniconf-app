import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IonicEventFacade } from 'src/app/facades/ionic-event.facade';
import { eventActions } from '../ionic-event/ionic-event.actions';
import { companiesActions } from './companies.actions';

@Injectable()
export class CompaniesEffects {
  constructor(
    private actions$: Actions,
    private eventFacade: IonicEventFacade
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventActions.loadEvent),
      switchMap((action) =>
        this.eventFacade.event$.pipe(
          map((event) =>
            companiesActions.loadCompaniesSuccess({
              companies: event.companies,
            })
          )
          // catchError((e: ApiError) =>
          //   of(
          //     companiesActions.loadCompaniesError({
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
