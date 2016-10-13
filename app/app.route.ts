import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './components/todo.component';
import { ToDoArchivesComponent } from './components/todoarchives.component';
import { ConnexionComponent } from './components/connexion.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/connexion',
        pathMatch: 'full'
    },
    {
        path: 'connexion',
        component: ConnexionComponent
    },
    {
        path: 'home',
        component: ToDoComponent
    },
    {
        path: 'archives',
        component: ToDoArchivesComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);