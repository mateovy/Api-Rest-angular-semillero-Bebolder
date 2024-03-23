import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-employees',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  employees: Empleado[] = [];
  employeeForm: FormGroup;
  employeeSelected: any;

  constructor(
    private employeeService: EmpleadosService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.employeeForm = this.fb.group({
      nmIdEmpleado: ['', Validators.required],
      dsNombre: ['', Validators.required],
      dsApellido: ['', Validators.required],
      nmDocumento: ['', Validators.required],
      dsDireccion: ['', Validators.required],
      feFechaIngreso: ['', Validators.required],
      feFechaRetiro: [''],
      nmSupervisorInmediato: ['', Validators.required],
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
    console.log(this.employeeForm.valid);
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.get('nmIdEmpleado')?.value);
      if (this.employeeSelected.nmIdEmpleado) {
        this.employeeService.actualizarEmpleado({...this.employeeSelected, ...this.employeeForm.value}).subscribe({
          next: () => {
            this.showSuccess("Exito al actualizar el empleado");
            this.loadEmployees();
            this.employeeForm.reset();
          },
          error: () => this.showError("Error al actualizar el empleado"),
        });
      }
    }
  }

  onEdit(event: MatSelectChange): void {
    this.employeeSelected = this.employees.find((value) => value.nmIdEmpleado === event.value);
    this.employeeForm.patchValue(this.employeeSelected);
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 2000 });
  }
}
