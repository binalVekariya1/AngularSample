import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction(
  '[Employee] Load Employees'
);

export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ data: any }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure',
  props<{ error: any }>()
);
