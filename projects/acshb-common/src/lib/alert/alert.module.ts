import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './services/alert.service';
import { AlertItemComponent } from './alert-item/alert-item.component';

@NgModule({
  declarations: [AlertComponent, AlertItemComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertComponent, AlertItemComponent]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [AlertService]
    };
  }
}
