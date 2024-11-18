import { Component, inject, OnInit, signal, Version } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reall-promise',
  standalone: true,
  imports: [],
  templateUrl: './reall-promise.component.html',
  styleUrl: './reall-promise.component.scss'
})
export class ReallPromiseComponent implements OnInit{
public promiseSignal = signal<any>(undefined);
public observablesSignal = signal<any>(undefined)


public weatherSignal = signal<any>(undefined)
public city ='Concord'
public api_key = "147712eaad23d97f3f88478d13256119";
public url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`;
private http = inject(HttpClient)

ngOnInit(): void {
  console.log("promise", this.promiseSignal())
  console.log("observable", this.observablesSignal())
  // this.fetchWeatherData();
  
  console.log(this.weatherFetechData())
}

 myPromise = new Promise((resolve, reject) =>{
const error = false;
  if(error){
    reject("rejected sorry")
  }
  else{
    let userData={
      name: "Hafiz",
      job: "developer",
      location:"Concord"
    }
    resolve(userData)
    console.log(userData)
  }this.myPromise.then((Response) =>{
    this.promiseSignal.set(Response)
  })
  .catch(error =>{
    this.promiseSignal.set(error)
  })
})

isPromise = new Promise((resolve, reject) =>{
let  success = false
if(success){
  reject("failed due to a problem")
}
else{
  let learning ={
    program: "Javascript",
    framework: "Angular",
    version: '18'
  }
  resolve(learning)
  console.log(learning)
}
this.isPromise.then((Response)=>{
  this.promiseSignal.set(Response)
})

})


// obersables 
myObserable = new Observable((Subscriber)=>{
  let error = false;
  if(error){
    Subscriber.error("error there is problem with observe")
  }
  else{
    let data = {
      obser:"learnObserable",
      focus:"Angular",
      practice: "Angular Project", 
      teacherName: "roger"
    }
    let priceDatails =[
      '33', 
      '44',
      '45'
    ]
    Subscriber.next(data)
    Subscriber.next(priceDatails)
    console.log(data)

    Subscriber.complete();
  }
  
  }).subscribe({
    next: Response =>{
      this.observablesSignal.set(Response)
    }
})

// weather example 
public weatherFetechData(){
this.http.get(this.url).subscribe({
next:(Response) =>{
  this.weatherSignal.set(Response.description)
  console.log(Response)
},
error(err) {
  console.log("error feathing found")
},
})
}


// tchWeatherData() {
//   const weatherObservable: Observable<any> = this.http.get<any>(this.url); // Observable that fetches the weather data

//   weatherObservable.subscribe({
//     next: (data) => {
//       console.log('Weather Data:', data); // Log data for debugging
//       this.weatherSignal.set(data); // Update the signal with the weather data
//     },
//     error: (error) => {
//       console.error('Error fetching weather data:', error); // Log error if API call fails
//     },
//     complete: () => {
//       console.log('Weather data fetch complete');
//     }
//   });
// }
}
