import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



import { TituloComponent } from './titulo/titulo.component';
import { FormBusquedaComponent } from './form-busqueda/form-busqueda.component';
import { BotonComponent } from './boton/boton.component';
import { RegistrarRhComponent } from './registrar-rh/registrar-rh.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaRhComponent } from './tabla-rh/tabla-rh.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    FormBusquedaComponent,
    BotonComponent,
    RegistrarRhComponent,
    HeaderComponent,
    FormularioComponent,
    TablaRhComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
