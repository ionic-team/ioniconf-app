/* eslint-disable @typescript-eslint/naming-convention */
import { createAction, props } from '@ngrx/store';

import { createErrorAction } from '../actions-util';
import { IonicEvent } from '../store.interfaces';

export const enum IonicEventActionTypes {
  LoadIonicEvent = '[Ionic Event] Load Ionic Event',
  LoadIonicEventStarted = '[Ionic Event] Load Ionic Event Started',
  LoadIonicEventSuccess = '[Ionic Event] Load Ionic Event Success',
  LoadIonicEventError = '[Ionic Event] Load Ionic Event Error',
}

const loadEvent = createAction(IonicEventActionTypes.LoadIonicEvent);
const loadEventStarted = createAction(
  IonicEventActionTypes.LoadIonicEventStarted
);
const loadEventError = createErrorAction(
  IonicEventActionTypes.LoadIonicEventError
);
const loadEventSuccess = createAction(
  IonicEventActionTypes.LoadIonicEventSuccess,
  props<{ event: IonicEvent }>()
);

export const eventActions = {
  loadEvent,
  loadEventStarted,
  loadEventError,
  loadEventSuccess,
};
