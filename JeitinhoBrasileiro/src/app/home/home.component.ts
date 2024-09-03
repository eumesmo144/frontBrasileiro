import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HeaderComponent, 
    FooterComponent, 
    RouterOutlet, 
    MatIconModule,  
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openCadastroProduto() {
    const dialogRef = this.dialog.open(CadastroProdutoComponent, {
      width: '600px',
      disableClose: true, // Impede que o modal seja fechado clicando fora dele
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
      // Lógica adicional após o fechamento, se necessário
    });
  }

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
      this.drawer.toggle();
    } else {
      console.error('Drawer não está inicializado!');
    }
  }
}