import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  role: string = 'Admin';

  totalCustomers = 10;
  ctx = { count: this.totalCustomers };

  data = {
    screen: true,
    label: 'Mobile'
  }
}
