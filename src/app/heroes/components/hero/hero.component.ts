import { Component } from '@angular/core';

// Created using ng g c heroes/hero
// this locates the folders and creates the templates based on the folder name
//It also updates the app.module.ts file automatically

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
