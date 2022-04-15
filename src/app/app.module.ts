import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './pages/html/html.component';
import { MapComponent } from './pages/js/Colections/map/map.component';
import { SetComponent } from './pages/js/Colections/set/set.component';
import { AtividadePratiComponent } from './pages/js/Colections/atividade-prati/atividade-prati.component';
import { TryCatchComponent } from './pages/js/debugging/try-catch/try-catch.component';
import { DomExceptionComponent } from './pages/js/debugging/dom-exception/dom-exception.component';
import { ErrorComponent } from './pages/js/debugging/error/error.component';
import { AtividadePraticaComponent } from './pages/js/debugging/atividade-pratica/atividade-pratica.component';
import { PromisesComponent } from './pages/js/assinconicidade/promises/promises.component';
import { ApiFetchComponent } from './pages/js/assinconicidade/api-fetch/api-fetch.component';
import { AtividadePooComponent } from './pages/js/poo/atividade-poo/atividade-poo.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    MapComponent,
    SetComponent,
    AtividadePratiComponent,
    TryCatchComponent,
    DomExceptionComponent,
    ErrorComponent,
    AtividadePraticaComponent,
    PromisesComponent,
    ApiFetchComponent,
    AtividadePooComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
