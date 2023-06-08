import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainDbzPageComponent, ListComponent, AddCharacterComponent],
  exports: [MainDbzPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
