import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { DescrProd } from '../pages/descr-prod/descr-prod';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Geolocation} from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { WebScraper } from '../providers/web-scraper';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Users,
    Repos,
    DescrProd
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Users,
    Repos,
    DescrProd
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebScraper
  ]
})
export class AppModule {}
