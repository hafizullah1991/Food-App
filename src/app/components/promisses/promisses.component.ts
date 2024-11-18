import { publishFacade } from '@angular/compiler';
import { Component, ExperimentalPendingTasks, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-promisses',
  standalone: true,
  imports: [],
  templateUrl: './promisses.component.html',
  styleUrl: './promisses.component.scss'
})
export class PromissesComponent implements OnInit{
  private http = inject(HttpClient)
 private apikey ='147712eaad23d97f3f88478d13256119'
  public weatherData: any
  userData: any


   public info={
        name:"Hafiz",
        job: "software egnineer"
      }

  ngOnInit(): void {
 
  }
// private fetchWeatherData(city:string){
  // const url = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={this.api}'

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}&units=metric`;

//   return new Promise((resolve, reject) => {
//     this.http.get(url).subscribe({
//       next: (response) => {
//         resolve(response);
//         console.log(response)
//       },
//       error: (err) => {
//         reject('Error fetching weather data: ' + err.message);
//         console.error(err);
//       },
//     });
//   });
// }

// public async ahmad(city: string) {
//   try {
//     console.log('Loading weather data...');
//     this.weatherData = await this.fetchWeatherData(city);
//     console.log('Weather data fetched:', this.weatherData);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     console.log('Process complete.');
//   }
// }
// }


  private featchData(error: boolean){
    return new Promise((resolve, reject)=>{
      if(error){
        reject("Error : rejected problem found feachdata")
      }
      else{
        let data ={
          name: "Hafiz", 
          job: "Sofware Developer", 
          company:"Microsoft", 
          CEO: "Roger", 
          locations:[
            "walnutCreek",
            "Concord", 
            "Texas"
          ]
        }
        resolve(data)
        console.log(data)
      }
    })
  }
  private buildDashboard(error: boolean){
    return new Promise((resolve, reject) => {
      if(error){
        reject("dashboar was not able to build sorry")
      }
      else{
        resolve("dashboard was build succesfully")
        console.log("Dashboard successfully completed")
      }
    })
    
    
  }
  public async login(){

    await this.featchData(false);
    await this.buildDashboard(true)
    
  }
  


private featchInfo(error: boolean){
  return new Promise((resolve, reject) =>{
    if(error){
      reject("rejected becuase there is an error")
    }
    else{
    resolve(this.info)
    }
  })
}
private sayHello(error: boolean)
{
  return new Promise((resolve, reject) =>{
    if(error){
      reject("there is error i'm hello")
    }
    else{
      resolve("hello everyone this is hello")
    }
  })
}
public click(){
  this.featchInfo(false);
  this.sayHello(false);
}
}