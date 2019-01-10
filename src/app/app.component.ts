import { Component } from '@angular/core';
import {leaveAnimation} from './shared/animations/leave-animation';
import {OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [leaveAnimation]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }
}
