import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';

import { Carros } from '../Carros';
import { Response } from '../Response';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/cars`;

  constructor(private http: HttpClient) { }

  getCarros(): Observable<Response<Carros[]>>{
    return this.http.get<Response<Carros[]>>(this.apiUrl);
  }

  getCarro(id: number): Observable<Response<Carros>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Carros>>(url);
  }

  createCarro(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
