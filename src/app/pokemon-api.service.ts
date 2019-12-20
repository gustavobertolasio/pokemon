import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemons } from './pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=825";
  private baseUrl2 = "https://pokeapi.co/api/v2/pokemon";
  @Input() pokemon;
  Poke: Pokemon[] = new Array();

  constructor(private http: HttpClient) { }
  pegarPokemons() {
    this.http.get<Pokemons>(this.baseUrl).subscribe(
      resposta => {
        for (let pokes of resposta.results) {
          let Pokemin = new Pokemon();
          console.log(pokes.name);
          this.pegarPokemon(pokes.name).subscribe(
            loucura => {
              
             
              Pokemin.name = loucura.name;
              Pokemin.sprites = loucura.sprites;
              Pokemin.id = loucura.id;
              //Pokemin.moves = loucura.moves.map(move => )
              this.Poke.push(Pokemin)
            }
          );
        }
        
      }      
    )
   
   setTimeout(A =>{ this.Poke.sort(((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)))
    
  }, 5000);
  console.log(this.Poke);
    return this.Poke;
    
  }

  pegarPokemon(pokemon: string) {
    pokemon = "/" + pokemon;

    return this.http.get<Pokemon>(this.baseUrl2 + pokemon);
  }

}
