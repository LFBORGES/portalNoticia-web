import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  categorias: any = [];

  constructor(
    private service: CategoriaService
  ) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.service.buscarTodos().subscribe(data => {
      this.categorias = data;
    })
  }

  deletar(id: String) {
    this.service.deletar(id).subscribe(() => {
      alert('Deletado com sucesso!');
      this.buscarTodos();
    });
  }

}
