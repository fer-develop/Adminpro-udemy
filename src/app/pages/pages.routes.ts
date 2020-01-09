import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children:
            [
                { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
                { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
                { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
                { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
                { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
                { path: 'acount-settings', component: AcountSettingsComponent, data: { titulo: 'Configuraciones del tema' } },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            ]
    }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
