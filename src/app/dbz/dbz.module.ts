import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {MainPageComponent} from "./pages/main-page.component";
import {AddCharacterComponent} from './components/add-character/add-character.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule {
}
