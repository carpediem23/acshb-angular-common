import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { ToastrComponent } from './toastr/toastr.component';



@NgModule({
  declarations: [AlertComponent, ToastrComponent],
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
