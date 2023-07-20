import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColoresComponent } from './colores/colores.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LineaColorComponent } from './colores/linea-color/linea-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    FormularioComponent,
    LineaColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
