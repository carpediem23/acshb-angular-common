import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ButtonsViewComponent } from '../components-page/buttons-view/buttons-view.component';

export const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'components/buttons', component: ButtonsViewComponent}
];
