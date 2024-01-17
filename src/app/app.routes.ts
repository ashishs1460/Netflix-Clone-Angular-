import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('./page/login/login.component').then(a=>a.LoginComponent)},
    {path:'browse',loadComponent:()=>import('./page/browse/browse.component').then(a=>a.BrowseComponent)}
];

