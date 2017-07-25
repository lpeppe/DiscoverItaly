import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DescSagra } from './desc-sagra';

@NgModule({
  declarations: [
    DescSagra,
  ],
  imports: [
  //  IonicModule.forChild(DescSagra),
  ],
  exports: [
    DescSagra
  ]
})
export class DescSagraModule {}
