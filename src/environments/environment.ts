// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ApiWeatherUrl : 'https://api.openweathermap.org/data/2.5/weather?appid=0bb82712a195af224a5605eeebea42d0&units=metric&lang=es&cnt=7&q=',
  ApiForecastUrl : '/weatherforecast/',
  ApiUser : '/api/',
  ApiUserAuth : '/api/login',
  ApiWeatherAuditoryUrl : '/weatherauditory/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
