import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { TestViewComponent } from '../test-view/test-view.component';
import { ButtonsViewComponent } from '../components-page/buttons-view/buttons-view.component';
import { FramesViewComponent } from '../components-page/frames-view/frames-view.component';
import { IconsViewComponent } from '../components-page/icons-view/icons-view.component';

export const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'test', component: TestViewComponent},
    {path: 'components/buttons', component: ButtonsViewComponent},
    {path: 'components/frames', component: FramesViewComponent},
    {path: 'components/icons', component: IconsViewComponent}
];
