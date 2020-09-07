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
import { PedidoComponent } from './pedido/pedido.component';
import { MapaComponent } from './mapa/mapa.component';
import { DestinoComponent } from './destino/destino.component';
import { PagoComponent } from './app-menu/pago/pago.component';
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
      { path: 'destino', component: DestinoComponent  },
      { path: 'pago', component: PagoComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'pedido', component: PedidoComponent },
      {path: 'spedido',component: SinglePedidoComponent}
    ]),
        
  ],
  declarations: [ AppComponent, HelloComponent, AppMenuComponent, PedidoComponent, MapaComponent, DestinoComponent, PagoComponent, InicioComponent, SinglePedidoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
