import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent, 
    FooterComponent, 
    RouterOutlet, 
    MatIconModule,  
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() cartOpened = new EventEmitter<void>();
  openCart() {
    this.cartOpened.emit();
  }
  cartItems = [
    { name: 'Acarajé', price: 50, image: 'assets/acaraje.jpg' },
    { name: 'Pato no Tucupi', price: 60, image: 'assets/pato-no-tucupi.jpg' },
    { name: 'Feijoada', price: 30, image: 'assets/feijoada.jpg' },
    { name: 'Coxinha', price: 25, image: 'assets/coxinha.jpg' },
  ]

}
