import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from 'projects/acshb-common/src/lib/layout/layout.module';
import { ComponentsModule } from 'projects/acshb-common/src/lib/components/components.module';
import { AlertModule } from 'projects/acshb-common/src/lib/alert/alert.module';
import { ModalModule } from 'projects/acshb-common/src/lib/modal/modal.module';
import { FormModule } from 'projects/acshb-common/src/lib/form/form.module';
import { DatatableModule } from 'projects/acshb-common/src/lib/datatable/datatable.module';
import { ChartModule } from 'projects/acshb-common/src/lib/chart/chart.module';
import { TestViewComponent } from './test-view/test-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { appRoutes } from './routes/routes';
import { ButtonsViewComponent } from './components-page/buttons-view/buttons-view.component';
import { IconsViewComponent } from './components-page/icons-view/icons-view.component';
import { FramesViewComponent } from './components-page/frames-view/frames-view.component';
import { AccordionsViewComponent } from './components-page/accordions-view/accordions-view.component';
import { DropdownsViewComponent } from './components-page/dropdowns-view/dropdowns-view.component';
import { AlertsViewComponent } from './components-page/alerts-view/alerts-view.component';
import { ModalsViewComponent } from './components-page/modals-view/modals-view.component';
import { FormsViewComponent } from './components-page/forms-view/forms-view.component';
import { DatatablesViewComponent } from './components-page/datatables-view/datatables-view.component';
import { ChartsViewComponent } from './components-page/charts-view/charts-view.component';
import { CardsViewComponent } from './components-page/cards-view/cards-view.component';
import { CalendarsViewComponent } from './components-page/calendars-view/calendars-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    HomePageComponent,
    ComponentsPageComponent,
    ButtonsViewComponent,
    IconsViewComponent,
    FramesViewComponent,
    AccordionsViewComponent,
    DropdownsViewComponent,
    AlertsViewComponent,
    ModalsViewComponent,
    FormsViewComponent,
    DatatablesViewComponent,
    ChartsViewComponent,
    CardsViewComponent,
    CalendarsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    ComponentsModule,
    ModalModule,
    AlertModule.forRoot(),
    FormModule,
    DatatableModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
