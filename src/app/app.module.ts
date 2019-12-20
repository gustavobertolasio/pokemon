import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PokemonApiComponent } from './pokemon-api/pokemon-api.component';
import { FormsModule } from '@angular/forms';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonApiComponent,
    PokemonDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
