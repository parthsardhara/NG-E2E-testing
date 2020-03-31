import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
        path: 'user-portal',
        loadChildren: () => import('./modules/user-portal/user-portal.module').then(m => m.UserPortalModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
