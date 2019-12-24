import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { TestViewComponent } from '../test-view/test-view.component';
import { ButtonsViewComponent } from '../components-page/buttons-view/buttons-view.component';
import { FramesViewComponent } from '../components-page/frames-view/frames-view.component';
import { IconsViewComponent } from '../components-page/icons-view/icons-view.component';
import { AccordionsViewComponent } from '../components-page/accordions-view/accordions-view.component';
import { DropdownsViewComponent } from '../components-page/dropdowns-view/dropdowns-view.component';
import { AlertsViewComponent } from '../components-page/alerts-view/alerts-view.component';
import { ModalsViewComponent } from '../components-page/modals-view/modals-view.component';
import { FormsViewComponent } from '../components-page/forms-view/forms-view.component';

export const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'test', component: TestViewComponent},
    {path: 'components/buttons', component: ButtonsViewComponent},
    {path: 'components/frames', component: FramesViewComponent},
    {path: 'components/icons', component: IconsViewComponent},
    {path: 'components/accordions', component: AccordionsViewComponent},
    {path: 'components/dropdowns', component: DropdownsViewComponent},
    {path: 'components/alerts', component: AlertsViewComponent},
    {path: 'components/modals', component: ModalsViewComponent},
    {path: 'components/forms', component: FormsViewComponent}
];
