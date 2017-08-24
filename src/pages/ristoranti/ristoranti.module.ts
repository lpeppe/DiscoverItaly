import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ristoranti } from './ristoranti';

@NgModule({
  declarations: [
    Ristoranti
  ],
  imports: [
    // IonicModule.forChild(Ristoranti),
  ],
  exports: [
    Ristoranti
  ]
})
export class RistorantiModule {}
