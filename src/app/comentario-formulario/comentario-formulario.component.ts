import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArquivoService } from '../services/arquivo.service';
import { UsuarioService } from '../services/usuario.service';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentario-formulario',
  templateUrl: './comentario-formulario.component.html',
  styleUrls: ['./comentario-formulario.component.css']
})
export class ComentarioFormularioComponent implements OnInit {

  comentario: any = {};
  usuarios: any = [];
  arquivos: any = [];

  constructor(
    private service: ComentarioService,
    private arquivoService: ArquivoService,
    private usuarioSerice: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buscarTodosArquivos();
    this.buscarTodosUsuarios();

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.service.buscarUm(params.id).subscribe(data => {
          this.comentario = data;
        });
      }
      else {
        this.comentario.usuario = "";
        this.comentario.arquivo = "";
      }
    });
  }

  buscarTodosUsuarios() {
    this.usuarioSerice.buscarTodos().subscribe(data => {
      this.usuarios = data;
    });
  }

  buscarTodosArquivos() {
    this.arquivoService.buscarTodos().subscribe(data => {
      this.arquivos = data;
    });
  }

  enviar() {
    if (this.comentario._id) {
      this.service.alterar(this.comentario).subscribe(() => {
        alert('Alterado com sucesso!');
      });
    }
    else {
      this.service.inserir(this.comentario).subscribe(() => {
        alert('Cadastrado com sucesso!');
      });
    }
  }
}
