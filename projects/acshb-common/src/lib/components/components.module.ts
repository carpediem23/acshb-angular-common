import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FrameComponent } from './frame/frame.component';
import { AccordionComponent } from './accordion/accordion.component';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FullCalendarModule
  ],
  declarations: [ButtonComponent, IconComponent, DropdownComponent, FrameComponent, AccordionComponent, LoaderComponent, SidebarComponent, CardComponent],
  exports: [ButtonComponent, IconComponent, DropdownComponent, FrameComponent, AccordionComponent, LoaderComponent, SidebarComponent, CardComponent]
})
export class ComponentsModule { }
