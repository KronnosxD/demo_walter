import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from 'app/components/login/login.component';


const appRoutes: Routes = [

	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'home', component: HomeComponent}
	
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });