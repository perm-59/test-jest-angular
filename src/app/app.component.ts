import {Component, OnInit} from '@angular/core';
import { LibsTestService } from 'projects/libs-test/src/public-api';


@Component({
  selector: 'app-root',
  template: `
    TEST
    <tl-list [list]="list"></tl-list>
    <div tlBorder>I am bordered now TEST</div>
  <span></span>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: string[] = [];

  constructor(private svc$: LibsTestService) {
  }

  ngOnInit() {
    this.svc$.list.subscribe((value => this.list = [...this.list, value]));
  }
}
