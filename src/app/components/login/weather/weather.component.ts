import { Component, Input, OnInit } from '@angular/core';
import {WeatherService} from 'src/app/services/weather.service';
import {ForecastService} from 'src/app/services/weather/forecast.service';
import {AuditoryService} from 'src/app/services/auditory/auditory.service';
// Importo el archivo JSON 
import * as Icons from 'src/assets/mocks/icons.json';
import * as Codes from 'src/assets/mocks/countryCode.json';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()  Islogued : boolean  = false;
  weather: any;
  iconsImg:any= JSON.stringify(Icons);
  countryCodes: any = JSON.stringify(Codes);
  img : any ;
  country:string ='';
  forecast : any;
  val : any;

  constructor(private weatherService : WeatherService,
              private ForecastService: ForecastService,
              private AuditoryService : AuditoryService) {}

  ngOnInit(): void {

  }

 
  getWeather(cityName: string, countryCode : string){
    this.weatherService.getWeather(cityName,countryCode)
    .subscribe(
      res => this.weather = res,
      //res => console.log(res),
      error => console.log(error),

    )
  }
  getIconWeather(icon : string){
  var img = "";
    switch(icon) { 
      case "01d": { 
        img = "https://icons.getbootstrap.com/assets/icons/brightness-high.svg"
         break; 
      } 
      case "02d": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-sun.svg"
         break; 
      } 
      case "03d": { 
        img ="https://icons.getbootstrap.com/assets/icons/cloud-sun.svg"
         break; 
      } 
      case "04d": { 
        img = "https://icons.getbootstrap.com/assets/icons/clouds.svg"
         break; 
      }
      case "11d": { 
         img = 'https://icons.getbootstrap.com/assets/icons/cloud-hail.svg'
         break; 
      } 
      case "13d": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-snow.svg"
         break; 
      } 
      case "02n": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-minus.svg"
         break; 
      }
      case "03n": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-sun.svg"
         break; 
      } 
      case "04n": { 
        img = "https://icons.getbootstrap.com/assets/icons/clouds.svg"
         break; 
      } 
      case "10n": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-lightning-rain.svg"
         break; 
      } 
      case "11n": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-lightning-rain.svg"
         break; 
      } 
      case "13n": { 
        img = "https://icons.getbootstrap.com/assets/icons/cloud-snow.svg"
         break; 
      } 
   } 
  }


  getCountry(code : string){
    this.country = "";
    switch(code) { 
      case "AR": { 
        this.country = "Argentina";
         break; 
      } 
      case "UK": { 
        this.country = "Gran Bretaña";
         break; 
      } 
      default: { 
        if(this.weather.sys != null || this.weather.sys != undefined)
        {
          this.country =  this.weather.sys.country;
        }
        break; 
     } 
   } 
  }

  getForecast(){
    this.ForecastService.TakeForecast().subscribe(
      res => this.forecast = res,
      error => console.log(error),
  )
}
AddAuditory(){
    this.AuditoryService.AddRegisterAuditory(this.val).subscribe(res=>{
      
               });

}
  submitLocation(cityName: HTMLInputElement,countryCode:HTMLInputElement){

     this.getWeather(cityName.value,countryCode.value);      
     this.val ={
      Email: sessionStorage.getItem('Email'),
      CityCode:cityName.value,
      CountryCode:countryCode.value,
      Temperature: '30'
    }
    this.getIconWeather("01d");
    countryCode.value = '';
    cityName.value = '';

    cityName.focus();

    this.AddAuditory();
    
    return false;
  
  }
}
