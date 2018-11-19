import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ArquivoListarComponent } from './arquivo-listar/arquivo-listar.component';
import { ArquivoFormularioComponent } from './arquivo-formulario/arquivo-formulario.component';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { ComentarioListarComponent } from './comentario-listar/comentario-listar.component';
import { ComentarioFormularioComponent } from './comentario-formulario/comentario-formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'arquivos', component: ArquivoListarComponent },
  { path: 'arquivo/cadastrar', component: ArquivoFormularioComponent },
  { path: 'arquivo/:id', component: ArquivoFormularioComponent },
  { path: 'categorias', component: CategoriaListarComponent },
  { path: 'categoria/cadastrar', component: CategoriaFormularioComponent },
  { path: 'categoria/:id', component: CategoriaFormularioComponent },
  { path: 'usuarios', component: UsuarioListarComponent },
  { path: 'usuario/cadastrar', component: UsuarioFormularioComponent },
  { path: 'usuario/:id', component: UsuarioFormularioComponent },
  { path: 'comentarios', component: ComentarioListarComponent },
  { path: 'comentario/cadastrar', component: ComentarioFormularioComponent },
  { path: 'comentario/:id', component: ComentarioFormularioComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }