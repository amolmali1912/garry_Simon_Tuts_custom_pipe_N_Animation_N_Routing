import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myArr = [3,7,8,4,5];
  myArr2 = [
    {name: 'Amol', age: 32, gender: 1},
    {name: 'Sheetal', age: 27, gender: 2},
    {name: 'Abhi', age: 28, gender: 1},
    {name: 'Ricky', age: 26, gender: 1},
    {name: 'Kajal', age: 41, gender: 3},
  ];
  parentProp = 'Amol'; // this property we are using within child component
  message = '';
}
