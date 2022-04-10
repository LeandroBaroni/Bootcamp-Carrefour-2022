import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/js/Colections/map/map.component';
import { SetComponent } from './pages/js/Colections/set/set.component';
import { AtividadePratiComponent } from './pages/js/Colections/atividade-prati/atividade-prati.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SetComponent,
    AtividadePratiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
