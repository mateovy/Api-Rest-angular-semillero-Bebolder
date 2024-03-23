import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacationRequest } from '../models/vacation-request.model';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {
  private apiUrl = 'http://localhost:8080/api/solicitudes-vacaciones';

  constructor(private http: HttpClient) { }

  getVacationRequests(): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(this.apiUrl);
  }

  createVacationRequest(request: VacationRequest): Observable<VacationRequest> {
    return this.http.post<VacationRequest>(this.apiUrl, request);
  }
}
