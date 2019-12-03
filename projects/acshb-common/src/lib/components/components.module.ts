import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FrameComponent } from './frame/frame.component';
import { AccordionComponent } from './accordion/accordion.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ButtonComponent, IconComponent, DropdownComponent, FrameComponent, AccordionComponent, LoaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ButtonComponent, IconComponent, DropdownComponent, FrameComponent, AccordionComponent, LoaderComponent]
})
export class ComponentsModule { }
