import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/card/2021/number';

  constructor(private http: HttpClient) {}

  obtenerMensaje(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
