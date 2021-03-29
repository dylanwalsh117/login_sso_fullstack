import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {TokenGuard} from './token.guard';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent, canActivate: [TokenGuard] },
    {path: 'register', component: RegisterComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
