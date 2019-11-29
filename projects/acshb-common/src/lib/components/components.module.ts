import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [ButtonComponent, IconComponent, DropdownComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ButtonComponent, IconComponent, DropdownComponent]
})
export class ComponentsModule { }
