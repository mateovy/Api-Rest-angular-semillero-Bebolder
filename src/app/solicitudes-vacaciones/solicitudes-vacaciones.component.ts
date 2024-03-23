import { Component, OnInit } from '@angular/core';
import { VacationRequestService } from '../services/solicitudes-vacaciones.service';
import { VacationRequest } from '../models/vacation-request.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vacation-requests-list',
  templateUrl: './solicitudes-vacaciones.component.html',
  styleUrls: ['./solicitudes-vacaciones.component.css']
})
export class VacationRequestsListComponent implements OnInit {
  vacationRequests: VacationRequest[] = [];
  displayedColumns: string[] = ['CC', 'Nombre', 'Apellido', 'Fecha_Inicio', 'Fecha_Fin', 'Estado'];

  constructor(
    private vacationRequestService: VacationRequestService,
    private snackBar: MatSnackBar
    ) {
  }

  ngOnInit(): void {
    this.loadVacationRequests();
  }

  loadVacationRequests(): void {
    this.vacationRequestService.getVacationRequests().subscribe({
      next: (data) => this.vacationRequests = data,
      error: () => this.showError('Error al cargar solicitudes de vacaciones'),
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }
}
