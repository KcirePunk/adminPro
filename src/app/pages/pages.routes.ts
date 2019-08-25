import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Gradicas1Component } from './gradicas1/gradicas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

const pagesRoutes: Routes = [
    {   
        path: '', component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Gradicas1Component},
            {path: 'account-settings', component: AccoutSettingsComponent},
            {path: '', pathMatch: 'full',redirectTo: '/dashboard'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)