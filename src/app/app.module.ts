import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { TituloComponent } from './utilities/titulo/titulo.component';
import { ListarRhComponent } from './acciones/listar-rh/listar-rh.component';
import { BotonComponent } from './utilities/boton/boton.component';
import { RegistrarRhComponent } from './acciones/registrar-rh/registrar-rh.component';
import { HeaderComponent } from './utilities/header/header.component';
import { FormularioComponent } from './utilities/formulario/formulario.component';
import { TablaRhComponent } from './utilities/tabla-rh/tabla-rh.component';

import { RechumanoService } from './services/rechumano/rechumano.service';
import { HomeComponent } from './home/home.component';
import { ConsultarRhComponent } from './acciones/consultar-rh/consultar-rh.component';
import { CuadroDatosComponent } from './utilities/cuadro-datos/cuadro-datos.component';
import { PruebaService } from './services/prueba/prueba.service';
import { EliminarRhComponent } from './acciones/eliminar-rh/eliminar-rh.component';
import { ModificarRhComponent } from './acciones/modificar-rh/modificar-rh.component';
import { ConfirmDialogComponent } from './utilities/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ListarRhComponent,
    BotonComponent,
    RegistrarRhComponent,
    HeaderComponent,
    FormularioComponent,
    TablaRhComponent,
    HomeComponent,
    ConsultarRhComponent,
    CuadroDatosComponent,
    EliminarRhComponent,
    ModificarRhComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),

  ],
  entryComponents:[EliminarRhComponent],
  providers: [RechumanoService, PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
