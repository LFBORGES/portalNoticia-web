import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent implements OnInit {

  usuario: any = {};

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.service.buscarUm(params.id).subscribe(data => {
          this.usuario = data;
        });
      }
    });
  }

  enviar() {
    if (this.usuario._id) {
      this.service.alterar(this.usuario).subscribe(() => {
        alert('Alterado com sucesso!');
      });
    }
    else {
      this.service.inserir(this.usuario).subscribe(() => {
        alert('Cadastrado com sucesso!');
      });
    }
  }

}
