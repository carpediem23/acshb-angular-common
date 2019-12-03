import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';



@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertComponent]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertModule,
      providers: [ AlertService ]
    };
  }
 }
