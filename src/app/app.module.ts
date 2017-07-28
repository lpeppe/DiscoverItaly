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
import { DescrRistPage } from '../pages/descr-rist/descr-rist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Geolocation} from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { WebScraper } from '../providers/web-scraper';
import { Autocomplete } from '../providers/autocomplete';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Toast } from '@ionic-native/toast';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Users,
    Repos,
    DescrProd,
    Ristoranti,
    DescrRistPage
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
    Ristoranti,
    DescrRistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebScraper,
    Autocomplete,
    GoogleMaps,
    Toast,
    CallNumber,
    LaunchNavigator,
    NativePageTransitions,
    PhotoViewer
  ]
})
export class AppModule {}
