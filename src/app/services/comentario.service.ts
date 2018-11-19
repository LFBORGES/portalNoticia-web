import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get('http://localhost:3000/comentario');
  }

  buscarUm(id: any) {
    return this.http.get('http://localhost:3000/comentario/' + id);
  }

  inserir(comentario: any) {
    return this.http.post('http://localhost:3000/comentario', comentario);
  }

  alterar(comentario: any) {
    return this.http.put('http://localhost:3000/comentario/' + comentario._id, comentario);
  }

  deletar(id: any) {
    return this.http.delete('http://localhost:3000/comentario/' + id);
  }

}
