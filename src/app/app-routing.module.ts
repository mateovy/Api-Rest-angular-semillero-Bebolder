import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { VacationRequestsListComponent } from './solicitudes-vacaciones/solicitudes-vacaciones.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';

const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'editar-empleado', component: CrearEmpleadoComponent },
  { path: 'listar-empleados', component: ListarEmpleadosComponent },
  { path: 'solicitudes-vacaciones', component: VacationRequestsListComponent },
  { path: 'crear-solicitud', component: CrearSolicitudComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
