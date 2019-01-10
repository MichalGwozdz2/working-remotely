import * as RemoteActions from './remote.actions';
import {Worker} from './worker';
import {WorkerStatus} from './worker-status';

export interface WorkerStatuses {
  workStatuses: WorkerStatus[];
}

export interface Workers {
  workers: Worker[];
}

export interface FilterWorkerUsername {
  filterWorkerUsername: string;
}

export interface FilterWorkerStatus {
  filterWorkerStatus: WorkerStatus;
}

export interface State {
  workers: Worker[];
  filterWorkerUsername: string;
  filterWorkerStatus: WorkerStatus;
  workStatuses: WorkerStatus[];
}

const initialState: State = {
  workers: [
    new Worker(0, 'User 1', 'x', 'a', {index: 0, code: 'in-office', name: 'in office'}),
    new Worker(1, 'User 2', 'x', 'a', {index: 1, code: 'working-remotely', name: 'working remotely'}),
    new Worker(2, 'User 3', 'x', 'a', {index: 2, code: 'on-leave', name: 'on leave'})
  ],
  filterWorkerUsername: '',
  filterWorkerStatus: null,
  workStatuses: [
    {index: 0, code: 'in-office', name: 'in office'},
    {index: 1, code: 'working-remotely', name: 'working remotely'},
    {index: 2, code: 'on-leave', name: 'on leave'}
  ]
};

export function remoteReducer(state = initialState, action: RemoteActions.RemoteActions) {
  switch (action.type) {
    case (RemoteActions.SET_FILTER_USERNAME):
      return {
        ...state,
        filterWorkerUsername: action.payload
      };
    case (RemoteActions.SET_FILTER_STATUS):
      return {
        ...state,
        filterWorkerStatus: action.payload
      };
    case (RemoteActions.SET_WORKERS):
      return {
        ...state,
        workers: [...action.payload]
      };
    case (RemoteActions.ADD_WORKER):
      return {
        ...state,
        workers: [...state.workers, action.payload]
      };
    case (RemoteActions.UPDATE_WORKER):
      const workerId = state.workers.findIndex((element: Worker) => element.index === action.payload.index);
      const updatedWorker = {...state.workers[workerId], ...action.payload.worker};
      const workers = [...state.workers];
      workers[workerId] = updatedWorker;
      return {
        ...state,
        workers: workers
      };
    case (RemoteActions.DELETE_WORKER):
      const oldWorkers = [...state.workers];
      oldWorkers.splice(action.payload, 1);
      return {
        ...state,
        workers: oldWorkers
      };
    default:
      return {
        ...state
      };
  }
}
