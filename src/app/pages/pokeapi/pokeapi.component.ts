import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokeapi: PokeapiService) { }

  async ngOnInit() {
    await this.showPokemons();
  }

  async showPokemons() {
    this.pokeapi.findAll().subscribe(
      {
        next: data => {
          console.log(data.results);
          this.pokemons = data.results;
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log('Finish')
      }
    );
  }

  showPokemonData(url: string) {
    alert("Hello");
  }
}
