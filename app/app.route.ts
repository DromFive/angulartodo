import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './components/todo.component';
import { ToDoArchivesComponent } from './components/todoarchives.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
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