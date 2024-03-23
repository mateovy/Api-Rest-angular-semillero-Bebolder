import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employees',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  employees: Empleado[] = [];
  employeeForm: FormGroup;

  constructor(
    private employeeService: EmpleadosService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.employeeForm = this.fb.group({
      dsNombre: ['', Validators.required],
      dsApellido: ['', Validators.required],
      nmDocumento: ['', Validators.required],
      dsDireccion: ['', Validators.required],
      feFechaIngreso: ['', Validators.required],
      feFechaRetiro: [''],
      nmSupervisorInmediato: [''],
      dsTelefono: ['', Validators.required],
    });
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

  onSubmit(): void {
    if (this.employeeForm.valid) {
        this.employeeService.crearEmpleado(this.employeeForm.value).subscribe({
          next: () => {
            this.showSuccess("Empleado creado con éxito");
            this.loadEmployees();
            this.employeeForm.reset();
          },
          error: () => this.showError("Error al crear el empleado"),
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
