import { ActionCreator, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createErrorAction<T extends string>(
  type: T
): ActionCreator<
  T,
  (props: {
    code: string;
    message: string;
    payload?: Record<string, unknown>;
  }) => {
    code: string;
    message: string;
    payload?: Record<string, unknown>;
  } & TypedAction<T>
> {
  return createAction(
    type,
    props<{
      code: string;
      message: string;
      payload?: Record<string, unknown>;
    }>()
  );
}
