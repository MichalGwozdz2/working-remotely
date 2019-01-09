import { Component } from '@angular/core';
import {leaveAnimation} from './shared/animations/leave-animation';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [leaveAnimation]
})
export class AppComponent { }
