import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { EmpleadosService } from '../services/empleados.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employees',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  employees: Empleado[] = [];

  constructor(
    private employeeService: EmpleadosService,
    private snackBar: MatSnackBar
  ) {
   
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.obtenerEmpleados().subscribe({
      next: (data) => this.employees = data,
      error: () => this.showError("Error al cargar los empleados"),
    });
  }

  findInspector(employee: Empleado): string {
    const findedEmployee = this.employees.find((val) => val.nmIdEmpleado === employee.nmSupervisorInmediato);
    return `${findedEmployee?.dsNombre ?? ''} ${findedEmployee?.dsApellido ?? ''}`;
  }


  showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }
}
