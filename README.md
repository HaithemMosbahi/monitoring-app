# Health Monitoring Application

Health monitoring is a sample prototype that uses Angular 4 and ngrx to monitor patient's health. The backend is built with Google cloud functions, the communication is made using Http.

Technology Stack :
* Angular 4 
* NgRx : redux implementation for angular apps.
* Material Design 
* Chart.js
* Express js
* Google cloud functions.
* Firebase

## Development server

First of all you need to install dependencies for both client and server.

Run `npm install` in the root folder of the project to install client dependencies.
Move to functions folder then Run `npm install` to install cloud functions dependencies.

After installing the dependencies you should be able to run the application locally by following these steps : 

* Run `firebase serve --only functions` to simulate cloud functions locally

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build & Deploy

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `firebase deploy` to deploy the application to firebase.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

