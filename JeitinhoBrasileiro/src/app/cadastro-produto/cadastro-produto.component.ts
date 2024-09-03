import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [
    MatIconModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  categories = ['Alimentos', 'Bebidas', 'Acessórios']; // Exemplo de categorias

  constructor(public dialogRef: MatDialogRef<CadastroProdutoComponent>) {}

  onSubmit() {
    console.log('Formulário submetido!');
    this.dialogRef.close(); // Fecha o modal após o envio
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Imagem selecionada:', file);
  }

  close() {
    this.dialogRef.close(); // Método para fechar o modal sem submeter
  }
}
