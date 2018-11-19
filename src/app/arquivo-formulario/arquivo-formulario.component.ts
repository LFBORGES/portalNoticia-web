import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArquivoService } from '../services/arquivo.service';
import { CategoriaService } from '../services/categoria.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-arquivo-formulario',
  templateUrl: './arquivo-formulario.component.html',
  styleUrls: ['./arquivo-formulario.component.css']
})
export class ArquivoFormularioComponent implements OnInit {

  arquivo: any = {};
  usuarios: any = [];
  categorias: any = [];

  constructor(
    private service: ArquivoService,
    private usuarioSerice: UsuarioService,
    private catService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buscarTodasCategorias();
    this.buscarTodosUsuarios();

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.service.buscarUm(params.id).subscribe(data => {
          this.arquivo = data;
        });
      }
      else {
        this.arquivo.usuario = "";
        this.arquivo.categoria = "";
      }
    });
  }

  buscarTodosUsuarios() {
    this.usuarioSerice.buscarTodos().subscribe(data => {
      this.usuarios = data;
    });
  }

  buscarTodasCategorias() {
    this.catService.buscarTodos().subscribe(data => {
      this.categorias = data;
    });
  }

  enviar() {
    if (this.arquivo._id) {
      this.service.alterar(this.arquivo).subscribe(() => {
        alert('Alterado com sucesso!');
      });
    }
    else {
      this.service.inserir(this.arquivo).subscribe(() => {
        alert('Cadastrado com sucesso!');
      });
    }
  }

}
