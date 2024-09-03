import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
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
    MatDialogModule,
    MatSidenavModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  cartItems = [
    { name: 'Acarajé', price: 50, image: 'assets/acaraje.jpg' },
    { name: 'Pato no Tucupi', price: 60, image: 'assets/pato-no-tucupi.jpg' },
    { name: 'Feijoada', price: 30, image: 'assets/feijoada.jpg' },
    { name: 'Coxinha', price: 25, image: 'assets/coxinha.jpg' },
  ];

  ngAfterViewInit() {
  }

  openCart() {
    if (this.drawer) {
      this.drawer.toggle(); // Abre ou fecha o drawer
    } else {
      console.error('Drawer não está inicializado!');
    }
  }
}