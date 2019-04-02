import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  powers: string[];
  model: Hero;
  heroes: Hero[];
  constructor() {
    this.powers = [
      'Really Smart', 'Super Flexible',
      'Super Hot' , 'Weather Changer'];
    this.model = new Hero(
      18,
      'Dr IQ',
      this.powers[0],
      'Chuck Overstreet');
    this.heroes = [];
  }

  ngOnInit() {
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.model);
    const heroe = new Hero(
      this.model.id,
      this.model.name,
      this.model.power,
      this.model.alterEgo);
    this.heroes.push(heroe);
    this.model = new Hero(0, '', this.powers[0], '');
  }

}
