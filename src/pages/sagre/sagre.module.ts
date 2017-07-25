import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Sagre } from './sagre';

@NgModule({
  declarations: [
    Sagre,
  ],
  imports: [
  //  IonicModule.forChild(Sagre),
  ],
  exports: [
    Sagre
  ]
})
export class SagreModule {}
