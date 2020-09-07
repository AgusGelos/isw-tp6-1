import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';  
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

import { MapaComponent } from './mapa/mapa.component';

import { InicioComponent } from './app-menu/inicio/inicio.component';
import { SinglePedidoComponent } from './single-pedido/single-pedido.component';

@NgModule({
   imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component:  InicioComponent},        
      { path: 'mapa', component: MapaComponent },
      
      {path: 'spedido',component: SinglePedidoComponent}
    ]),
        
  ],
  declarations: [ AppComponent, HelloComponent, AppMenuComponent, MapaComponent,   InicioComponent, SinglePedidoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
