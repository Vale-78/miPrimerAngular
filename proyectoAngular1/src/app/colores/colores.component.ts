import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})

export class ColoresComponent {
  colores: any = ['rojo', 'azul', 'amarillo']; 
  miColor='';
  constructor(){};
  
  addColores(color:string) {
   this.colores.push(color);
 }
}


 
