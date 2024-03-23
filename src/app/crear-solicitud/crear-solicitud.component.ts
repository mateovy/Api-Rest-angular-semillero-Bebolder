import { Component, OnInit } from '@angular/core';
import { VacationRequestService } from '../services/solicitudes-vacaciones.service';
import { VacationRequest } from '../models/vacation-request.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Empleado } from '../models/empleado.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../models/usuarios.model';

@Component({
  selector: 'app-vacation-requests-list',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  vacationRequests: VacationRequest[] = [];
  vacationRequestForm: FormGroup;
  employees: Usuario[] = [];
  selecteEmployee: any;

  constructor(
    private fb: FormBuilder,
    private vacationRequestService: VacationRequestService,
    private usuariosService: UsuariosService,
    private snackBar: MatSnackBar
    ) {
    this.vacationRequestForm = this.fb.group({
      nmIdUsuario:  ['', Validators.required],
      feFechaInicio: ['', Validators.required],
      feFechaFin: ['', Validators.required],
      dsObservaciones: [''],
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
  }


  loadEmployees(): void {
    this.usuariosService.getUsersRequests().subscribe({
      next: (data) => this.employees = data,
      error: (error) => console.error('Error al cargar lista de empleados', error),
    });
  }

  onSelectEmployee(employee: Empleado) {
    this.selecteEmployee = employee;
  }

  onSubmit(): void {
    if (this.vacationRequestForm.valid) {
      const value = this.vacationRequestForm.value
        this.vacationRequestService.createVacationRequest({usuario: {nmIdUsuario: parseInt(value.nmIdUsuario)}, dsEstado: 'Pendiente', ...value }).subscribe({
          next: () => {
            this.showSuccess('Solicitud de vacaciones creada con éxito');
            this.vacationRequestForm.reset();
          },
          error: (error: any) => this.showError('Error al crear solicitud de vacaciones'),
        });
    }
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }
}
