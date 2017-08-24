import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DescrRistPage } from './descr-rist';

@NgModule({
  declarations: [
    DescrRistPage
  ],
  imports: [
    //IonicModule.forChild(DescrRistPage),
  ],
  exports: [
    DescrRistPage
  ]
})
export class DescrRistPageModule {}
