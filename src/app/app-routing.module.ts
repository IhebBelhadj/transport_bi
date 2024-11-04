import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard, LoginGuard } from './auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    { path: '', loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
                ]
            },
            { path: 'login', canActivate: [LoginGuard], loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
            { path: 'logout', loadComponent: () => import('./logout/logout.component').then(m => m.LogoutComponent) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
