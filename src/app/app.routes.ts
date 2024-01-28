import { Routes } from '@angular/router';
import { UsernameValidCheckComponent } from './username-valid-check/username-valid-check.component';

export const routes: Routes = [

    {path: 'usernamecheck', component: UsernameValidCheckComponent},
    {path: '', redirectTo: '/usernamecheck', pathMatch: 'full'},
    {path: '**', redirectTo: '/usernamecheck', pathMatch: 'full'}
];
