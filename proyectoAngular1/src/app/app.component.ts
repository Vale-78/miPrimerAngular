import { Component } from '@angular/core';
import { PostService } from './servicios/post.service';

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
  constructor(private post:PostService){
    
    this.post.getPosts().subscribe(data => {
      console.log("POSTS", data);
    })
  };


  // ngOnInit(): void{
  //   alert('Hola');
  // }
}
