import { Component, OnInit } from '@angular/core';

import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentario-listar',
  templateUrl: './comentario-listar.component.html',
  styleUrls: ['./comentario-listar.component.css']
})
export class ComentarioListarComponent implements OnInit {

  comentarios: any = [];

  constructor(
    private service: ComentarioService
  ) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.service.buscarTodos().subscribe(data => {
      this.comentarios = data;
    })
  }

  deletar(id: String) {
    this.service.deletar(id).subscribe(() => {
      alert('Deletado com sucesso!');
      this.buscarTodos();
    });
  }

}
