import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CacheService } from "ionic-cache";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Users } from '../pages/users/users';
import { Repos } from '../pages/repos/repos';
import { Sagre } from '../pages/sagre/sagre';
import { Ristoranti } from '../pages/ristoranti/ristoranti';
import { ShareService } from '../providers/share-service';
import { WebScraper } from '../providers/web-scraper';

@Component({
  templateUrl: 'app.html',
  providers: [ShareService, WebScraper]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Repos;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public events: Events, public cache: CacheService) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Seleziona luogo', component: Repos },
      // { title: 'Home', component: HomePage },
      { title: 'Luoghi di interesse', component: ListPage },
      { title: 'Ristoranti', component: Ristoranti},
      { title: 'Prodotti Tipici', component: Users },
      { title: 'Sagre', component: Sagre}
    ];
    cache.setDefaultTTL(60 * 60);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  menuClosed() {
    this.events.publish('menu:close');
  }

  menuOpened() {
    this.events.publish('menu:open');
  }
}
