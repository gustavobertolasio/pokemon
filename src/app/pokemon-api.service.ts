import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemons } from './pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";
  @Input() pokemon;
  Poke: Pokemon[] = new Array();

  constructor(private http: HttpClient) { }
  pegarPokemons() {
    this.http.get<Pokemons>(this.baseUrl).subscribe(
      resposta => {
        for (let pokes of resposta.results) {
          let Pokemin = new Pokemon();
          this.pegarPokemon(pokes.name).subscribe(
            loucura => {
              Pokemin.name = loucura.name;
              Pokemin.sprites = loucura.sprites;
              Pokemin.id = loucura.id;
              this.Poke.push(Pokemin)
            }
          );}}
    )
    console.log(this.Poke);
    return this.Poke;
  }

  pegarPokemon(pokemon: string) {
    pokemon = "/" + pokemon;

    return this.http.get<Pokemon>(this.baseUrl + pokemon);
  }

}
