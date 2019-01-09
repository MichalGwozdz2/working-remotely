import * as RemoteActions from './remote.actions';
import {Worker} from './worker';

export interface State {
  workers: Worker[];
  workStatuses: string[];
}

const initialState: State = {
  workers: [
    new Worker(0, 'a', 'x', 'a', 'a'),
    new Worker(1, 'b', 'x', 'a', 'a'),
    new Worker(2, 'c', 'x', 'a', 'a')
  ],
  workStatuses: [
    'IN_OFFICE',
    'WORKING_REMOTELY',
    'ON_LEAVE'
  ]
};

export function remoteReducer(state = initialState, action: RemoteActions.RemoteActions) {
  switch (action.type) {
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
