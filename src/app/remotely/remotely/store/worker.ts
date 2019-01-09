import {WorkerStatus} from './worker-status.enum';

export class Worker {

  public index: number;
  public username: string;
  public email: string;
  public password: string;
  public status: WorkerStatus;

  constructor(index: number, username: string, email: string, password: string, status: WorkerStatus) {
    this.index = index;
    this.username = username;
    this.email = email;
    this.password = password;
    this.status = status;
  }
}
