import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DescrProd } from './descr-prod';

@NgModule({
  declarations: [
    DescrProd
  ],
  imports: [
    // IonicModule.forChild(DescrProd),
  ],
  exports: [
    DescrProd
  ]
})
export class DescrProdModule {}
