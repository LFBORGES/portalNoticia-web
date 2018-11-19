import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArquivoService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get('http://localhost:3000/arquivo');
  }

  buscarUm(id: any) {
    return this.http.get('http://localhost:3000/arquivo/' + id);
  }

  inserir(arquivo: any) {
    return this.http.post('http://localhost:3000/arquivo', arquivo);
  }

  alterar(arquivo: any) {
    return this.http.put('http://localhost:3000/arquivo/' + arquivo._id, arquivo);
  }

  deletar(id: any) {
    return this.http.delete('http://localhost:3000/arquivo/' + id);
  }

}