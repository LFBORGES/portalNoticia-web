import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {

  categoria: any = {};

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.service.buscarUm(params.id).subscribe(data => {
          this.categoria = data;
        });
      }
    });
  }

  enviar() {
    if (this.categoria._id) {
      this.service.alterar(this.categoria).subscribe(() => {
        alert('Alterado com sucesso!');
      });
    }
    else {
      this.service.inserir(this.categoria).subscribe(() => {
        alert('Cadastrado com sucesso!');
      });
    }
  }

}
