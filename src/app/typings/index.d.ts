type Nullable<T> = T | null;
type KeyOf<T> = keyof T;
type ValueOf<T> = T[keyof T];
type ById<T> = { [key in string | number]: T };
