import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'mg-status-types',
  templateUrl: './status-types.component.html',
  styleUrls: ['./status-types.component.scss']
})
export class StatusTypesComponent implements OnInit {
  workStatusesState: Observable<{workStatuses: string[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.workStatusesState = this.store.select('remote');
  }

}
