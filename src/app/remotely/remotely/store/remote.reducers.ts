import * as RemoteActions from './remote.actions';
import {Worker} from './worker';
import {WorkerStatus} from './worker-status.enum';

export interface Workers {
  workers: Worker[];
}

export interface FilterWorker {
  filterWorker: string;
}

export interface State {
  workers: Worker[];
  filterWorker: string;
  workStatuses: {code: string, name: string}[];
}

const initialState: State = {
  workers: [
    new Worker(0, 'a', 'x', 'a', WorkerStatus.IN_OFFICE),
    new Worker(1, 'b', 'x', 'a', WorkerStatus.ON_LEAVE),
    new Worker(2, 'c', 'x', 'a', WorkerStatus.WORKING_REMOTELY)
  ],
  filterWorker: '',
  workStatuses: [
    {code: 'in-office', name: 'in office'},
    {code: 'working-remotely', name: 'working remotely'},
    {code: 'on-leave', name: 'on leave'}
  ]
};

export function remoteReducer(state = initialState, action: RemoteActions.RemoteActions) {
  switch (action.type) {
    case (RemoteActions.SET_FILTER):
      return {
        ...state,
        filterWorker: action.payload
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
