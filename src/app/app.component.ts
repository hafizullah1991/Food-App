import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PromissesComponent } from "./components/promisses/promisses.component";
import { ReallPromiseComponent } from "./components/reall-promise/reall-promise.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ContactsComponent, PromissesComponent, ReallPromiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foodapp';
}
