import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"loginappmovil-4b17f","appId":"1:218720210689:web:3920315def55cc1cc71500","storageBucket":"loginappmovil-4b17f.appspot.com","apiKey":"AIzaSyBKLJ9ixI4pWekF0aH_AXBW1eQDSsydnPk","authDomain":"loginappmovil-4b17f.firebaseapp.com","messagingSenderId":"218720210689"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}

//ng add @angular/fire
//npm install -g firebase-tools

