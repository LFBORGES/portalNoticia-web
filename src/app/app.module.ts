import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { ArquivoListarComponent } from './arquivo-listar/arquivo-listar.component';
import { ArquivoFormularioComponent } from './arquivo-formulario/arquivo-formulario.component';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { ComentarioListarComponent } from './comentario-listar/comentario-listar.component';
import { ComentarioFormularioComponent } from './comentario-formulario/comentario-formulario.component';
import { AppRoutingModule } from './app-routing.module';

import { ArquivoService } from './services/arquivo.service';
import { UsuarioService } from './services/usuario.service';
import { CategoriaService } from './services/categoria.service';
import { ComentarioService } from './services/comentario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsuarioListarComponent,
    UsuarioFormularioComponent,
    ArquivoListarComponent,
    ArquivoFormularioComponent,
    CategoriaListarComponent,
    CategoriaFormularioComponent,
    ComentarioListarComponent,
    ComentarioFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArquivoService,
    UsuarioService,
    CategoriaService,
    ComentarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
