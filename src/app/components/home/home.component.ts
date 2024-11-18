import { Component ,OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodMenu } from './interfaces';
import { filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
private http = inject(HttpClient)
private api = 'https://jellybellywikiapi.onrender.com/api/Beans';
public foods = signal<FoodMenu[]>([])
ngOnInit(): void {
  this.http.get<FoodMenu[]>(this.api).subscribe({
    next: response => {
     console.log(response); // Set the foods signal to the array (groupName)
    },
    error: error => {
      throw error;
    },
    complete() {
      console.log('the subscription completed');
    },
  });
}
}