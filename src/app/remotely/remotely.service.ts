import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

import {Worker} from './remotely/store/worker';

@Injectable({
  providedIn: 'root'
})
export class RemotelyService {

  constructor(private http: HttpClient) {
  }

  getWorkerList(): Observable<Array<Worker>> {
    // this.http.get<Array<Worker>>('/worker-list').subscribe();

    const workerList = Math.random() > .5 ? [
      new Worker(0, 'User 1', 'x', 'a', {index: 0, code: 'in-office', name: 'in office'}),
      new Worker(1, 'User 2', 'x', 'a', {index: 1, code: 'working-remotely', name: 'working remotely'}),
      new Worker(2, 'User 3', 'x', 'a', {index: 2, code: 'on-leave', name: 'on leave'})
    ] :
    [
      new Worker(0, 'User 1', 'x', 'a', {index: 0, code: 'in-office', name: 'in office'}),
      new Worker(1, 'User 2', 'x', 'a', {index: 1, code: 'working-remotely', name: 'working remotely'}),
      new Worker(2, 'User 3', 'x', 'a', {index: 2, code: 'on-leave', name: 'on leave'}),
      new Worker(3, 'User 1', 'x', 'a', {index: 0, code: 'in-office', name: 'in office'}),
      new Worker(4, 'User 2', 'x', 'a', {index: 1, code: 'working-remotely', name: 'working remotely'}),
      new Worker(5, 'User 3', 'x', 'a', {index: 2, code: 'on-leave', name: 'on leave'})
    ];

    return of(workerList).pipe(delay(1000));
  }
}
