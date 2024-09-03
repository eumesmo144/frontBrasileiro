import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,
    MatIconModule, 
    RouterOutlet, 
    MatSidenav, 
    MatButtonModule, 
    MatToolbarModule,
    MatFormField,
    MatLabel, MatSelect, MatOption, 
  ],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  categories = ['Alimentos', 'Bebidas', 'Acessórios']; // Exemplo de categorias

  onSubmit() {
    console.log('Formulário submetido!');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Imagem selecionada:', file);
  }

}
