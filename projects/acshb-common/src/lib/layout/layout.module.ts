import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AlertModule } from '../alert/alert.module';
import { ComponentsModule } from '../components/components.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [SidebarComponent, ToolbarComponent, WrapperComponent],
  imports: [CommonModule, ComponentsModule, AlertModule, ModalModule],
  exports: [SidebarComponent, ToolbarComponent, WrapperComponent],
})
export class LayoutModule {}
