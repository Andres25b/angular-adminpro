import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso = 40;
  @Input() btnClass = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number): void {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    } else if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    } else {
      this.progreso += valor;
      this.valorSalida.emit(this.progreso);
    }
  }

  onChange(nuevoValor: number): void {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
