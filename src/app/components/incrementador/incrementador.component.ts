import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter()
  constructor() { 

  }

  ngOnInit() {

  }

  cambiarValor(valor){
    this.porcentaje = this.porcentaje + valor;
    
    if(this.porcentaje >= 100){
      this.porcentaje = 100;      
    }
    
    if(this.porcentaje <= 0){
      this.porcentaje = 0;          
    }
    
    this.cambioValor.emit(this.porcentaje);
  }

  onChanges(newValue: number){
    //let elemHTML = document.getElementsByName('porcentaje')[0];

     if(newValue >= 100){
       this.porcentaje = 100;
     }else if(newValue <= 0){
       this.porcentaje = 0;
     }else {
       this.porcentaje = newValue;
     }

     //elemHTML.value = this.porcentaje;
     this.txtProgress.nativeElement.value = this.porcentaje;
     this.cambioValor.emit(newValue);
  }

}
