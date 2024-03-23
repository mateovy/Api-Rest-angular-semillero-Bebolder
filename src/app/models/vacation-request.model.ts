export interface VacationRequest {
  nmIdSolicitud: number,
  usuario?: {
      nmIdUsuario: number,
      empleado?: {
          nmIdEmpleado?: number,
          nmDocumento?: number,
          dsTipoDocumento?: string,
          dsNombre?: string,
          dsApellido?: string,
          dsTelefono?: string,
          dsDireccion?: string,
          feFechaIngreso?: string,
          feFechaRetiro?: string,
          dsTipoContrato?: string,
          dsEstadoEmpleado?: string,
          nmSupervisorInmediato?: number,
          nmCargo?: number
      },
      dsUsuario?: string,
      feFechaCreacion?: string,
      dsActivo?: string,
      dsContraseña?: string,
      rolUsuario: {
          nmIdRol: number,
          dsRol: string,
          feFechaCreacion: string
      }
  },
  nmDiasSolicita: number,
  feFechaInicio: string,
  feFechaFin: string,
  feFechaRetorna: string,
  dsEstado: string,
  dsObservaciones: string,
  feFechaCreacion: string
}
