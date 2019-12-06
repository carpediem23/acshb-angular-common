import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../../../acshb-common/src/lib/layout/layout.module';
import { ComponentsModule } from '../../../acshb-common/src/lib/components/components.module';
import { AlertModule } from '../../../acshb-common/src/lib/alert/alert.module';
import { ModalModule } from '../../../acshb-common/src/lib/modal/modal.module';
import { TestViewComponent } from './test-view/test-view.component';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ComponentsModule,
    ModalModule,
    AlertModule.forRoot(),
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
