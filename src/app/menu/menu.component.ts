import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonApiComponent } from '../pokemon-api/pokemon-api.component';
import { Observable } from 'rxjs';
import { PokemonApiService } from '../pokemon-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pokemons: Pokemon[];
  pokemon: Pokemon;
  control = new FormControl();
  constructor(private apiRequest: PokemonApiService) { }

  ngOnInit() {
    this.pokemons = this.apiRequest.pegarPokemons();
    
    /*
      
  

   {
        this.apiRequest.pegarPokemon(pokemonPesquisa)
      .subscribe(
        (resposta) => {
         /* setTimeout(() => {
            this.pokemon.name = resposta.name;
            this.pokemon.height = resposta.height;
            this.pokemon.sprites = resposta.sprites;
            this.pokemon.types = resposta.types;
          },3000
          )*/
    //console.log(resposta);
  }

  buscarPokemon(pokemonPesquisa: string){
    console.log(pokemonPesquisa)
  }

}






