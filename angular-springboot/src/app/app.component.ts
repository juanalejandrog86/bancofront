import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ mensaje }}</h1>`,
})
export class AppComponent implements OnInit {
  mensaje: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerMensaje().subscribe((data) => {
      this.mensaje = data;
    });
  }
}
