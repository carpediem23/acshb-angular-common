import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentsModule } from '../components/components.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [SidebarComponent, ToolbarComponent],
  imports: [CommonModule, ComponentsModule, ModalModule],
  exports: [SidebarComponent, ToolbarComponent],
})
export class LayoutModule {}
