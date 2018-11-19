import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get('http://localhost:3000/categoria');
  }

  buscarUm(id: any) {
    return this.http.get('http://localhost:3000/categoria/' + id);
  }

  inserir(categoria: any) {
    return this.http.post('http://localhost:3000/categoria', categoria);
  }

  alterar(categoria: any) {
    return this.http.put('http://localhost:3000/categoria/' + categoria._id, categoria);
  }

  deletar(id: any) {
    return this.http.delete('http://localhost:3000/categoria/' + id);
  }

}
