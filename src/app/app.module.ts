import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { AppComponent } from './app.component';
import { VacationRequestsListComponent } from './solicitudes-vacaciones/solicitudes-vacaciones.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    VacationRequestsListComponent,
    CrearEmpleadoComponent,
    ListarEmpleadosComponent,
    CrearSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
