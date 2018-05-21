import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
// @Input() parentData;

@Input('parentData') name;

@Output() childEvent = new EventEmitter();  // create instance of EventEmitter

  constructor() { }

  ngOnInit() {
  }

  FireEvent() {
    this.childEvent.emit('Passing Message from Child Component by Using EventEmitter');
  }

}
