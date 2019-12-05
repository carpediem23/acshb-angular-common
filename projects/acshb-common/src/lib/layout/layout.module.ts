import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AlertModule } from '../alert/alert.module';
import { ComponentsModule } from '../components/components.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [ToolbarComponent, WrapperComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AlertModule,
    ModalModule
  ],
  exports: [ToolbarComponent, WrapperComponent]
})
export class LayoutModule { }
