import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  usuarios: any = [];

  constructor(
    private service: UsuarioService
  ) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.service.buscarTodos().subscribe(data => {
      this.usuarios = data;
    })
  }

  deletar(id: String) {
    this.service.deletar(id).subscribe(() => {
      alert('Deletado com sucesso!');
      this.buscarTodos();
    });
  }

}
