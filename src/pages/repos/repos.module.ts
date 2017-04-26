import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Repos } from './repos';

@NgModule({
  declarations: [
    Repos,
  ],
  imports: [
    //IonicModule.forChild(Repos),
  ],
  exports: [
    Repos
  ]
})
export class ReposModule {}
