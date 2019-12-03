import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [ToolbarComponent, WrapperComponent],
  imports: [
    CommonModule,
    AlertModule
  ],
  exports: [ToolbarComponent, WrapperComponent]
})
export class LayoutModule { }
