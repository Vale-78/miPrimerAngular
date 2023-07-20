import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='proyectoAngular1';
  titulo = 'Proyecto de Angular 1';
  subtitulo= 'Probando el subtitulo';

  mostrar = false;
 
  miColor='';
  constructor(){};

  // addColores(color:string){
  //   this.colores.push(color);
  // }


  ngOnInit(): void{
    alert('Hola');
  }
}
