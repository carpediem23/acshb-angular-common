import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '../../../acshb-common/src/lib/layout/layout.module';
import { ComponentsModule } from '../../../acshb-common/src/lib/components/components.module';
import { AlertModule } from '../../../acshb-common/src/lib/alert/alert.module';
import { ModalModule } from '../../../acshb-common/src/lib/modal/modal.module';
import { FormModule } from '../../../acshb-common/src/lib/form/form.module';
import { DatatableModule } from '../../../acshb-common/src/lib/datatable/datatable.module';
import { TestViewComponent } from './test-view/test-view.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { SidebarService } from './services/sidebar.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';
import { ButtonsViewComponent } from './components-page/buttons-view/buttons-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    HomePageComponent,
    ComponentsPageComponent,
    ButtonsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot(),
    Ng2TableModule,
    LayoutModule,
    ComponentsModule,
    ModalModule,
    AlertModule.forRoot(),
    FormModule,
    DatatableModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
