import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';

import { Carros } from '../Carros';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/cars`

  constructor(private http: HttpClient) { }

  createCarro(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }
}
