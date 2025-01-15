import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/shared/components/layouts/layouts-dashboard/layouts-dashboard.component').then(mod => mod.LayoutsDashboardComponent),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('../app/pages/dashboard/home/home.component').then(mod => mod.HomeComponent) },
        ]
    },
];
