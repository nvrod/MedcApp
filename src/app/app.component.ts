import { Component } from '@angular/core';
import { AuthService } from './pages/servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedcApp';

  constructor (public AuthService:AuthService ){

  }
}
