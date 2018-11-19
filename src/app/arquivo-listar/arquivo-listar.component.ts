import { Component, OnInit } from '@angular/core';

import { ArquivoService } from '../services/arquivo.service';

@Component({
  selector: 'app-arquivo-listar',
  templateUrl: './arquivo-listar.component.html',
  styleUrls: ['./arquivo-listar.component.css']
})
export class ArquivoListarComponent implements OnInit {

  arquivos: any = [];

  constructor(
    private service: ArquivoService
  ) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.service.buscarTodos().subscribe(data => {
      this.arquivos = data;
    })
  }
  
  deletar(id: String) {
    this.service.deletar(id).subscribe(() => {
      alert('Deletado com sucesso!');
      this.buscarTodos();
    });
  }

}
