import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  Subject = 'Test Subject';
  Months = ['January', 'Feburary', 'March'];
  isavailable = true;
}
