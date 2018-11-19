import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get('http://localhost:3000/usuario');
  }

  buscarUm(id: any) {
    return this.http.get('http://localhost:3000/usuario/' + id);
  }

  inserir(usuario: any) {
    return this.http.post('http://localhost:3000/usuario', usuario);
  }

  alterar(usuario: any) {
    return this.http.put('http://localhost:3000/usuario/' + usuario._id, usuario);
  }

  deletar(id: any) {
    return this.http.delete('http://localhost:3000/usuario/' + id);
  }
}
