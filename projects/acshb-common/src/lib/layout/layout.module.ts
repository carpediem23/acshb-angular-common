import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [ToolbarComponent, WrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent]
})
export class LayoutModule { }
