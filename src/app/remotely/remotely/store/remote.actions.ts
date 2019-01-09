import { Action } from '@ngrx/store';
import { Worker } from './worker';

export const SET_WORKERS = 'SET_WORKERS';
export const ADD_WORKER = 'ADD_WORKER';
export const UPDATE_WORKER = 'UPDATE_WORKER';
export const DELETE_WORKER = 'DELETE_WORKER';
export const FETCH_WORKERS = 'FETCH_WORKERS';

export class SetWorkers implements Action {
  readonly type = SET_WORKERS;

  constructor(public payload: Array<Worker>) { }
}

export class AddWorker implements Action {
  readonly type = ADD_WORKER;

  constructor(public payload: Worker) { }
}

export class UpdateWorker implements Action {
  readonly type = UPDATE_WORKER;

  constructor(public payload: {index: number, worker: Worker}) { }
}

export class DeleteWorker implements Action {
  readonly type = DELETE_WORKER;

  constructor(public payload: number) { }
}

export type RemoteActions =
  SetWorkers |
  AddWorker |
  UpdateWorker |
  DeleteWorker;
