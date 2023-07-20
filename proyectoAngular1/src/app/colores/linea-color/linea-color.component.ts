import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linea-color',
  templateUrl: './linea-color.component.html',
  styleUrls: ['./linea-color.component.css']
})
export class LineaColorComponent {
  @Input() color: any;
    constructor(){ };
  

}
