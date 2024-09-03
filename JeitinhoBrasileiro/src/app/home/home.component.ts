import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
