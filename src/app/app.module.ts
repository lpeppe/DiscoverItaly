import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AutoCompleteModule } from 'ionic2-auto-complete';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { DescrProd } from '../pages/descr-prod/descr-prod';
import { Ristoranti } from '../pages/ristoranti/ristoranti';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Geolocation} from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { WebScraper } from '../providers/web-scraper';
import { Autocomplete } from '../providers/autocomplete';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Users,
    Repos,
    DescrProd,
    Ristoranti
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AutoCompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Users,
    Repos,
    DescrProd,
    Ristoranti
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebScraper,
    Autocomplete
  ]
})
export class AppModule {}
