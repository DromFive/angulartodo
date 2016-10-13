import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Routing } from './app.route';
import { AppComponent }  from './app.component';

import { TodoService } from './services/todo.service';
import { ToDoComponent } from './components/todo.component';
import { AppNavigationDirective } from './directives/app.navigation.directive';
import { AppFooterDirective } from './directives/app.footer.directive';
import { ToDoArchivesComponent } from './components/todoarchives.component';
import { ConnexionComponent } from './components/connexion.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, Routing ],
  declarations: [ AppComponent, ToDoComponent, ToDoArchivesComponent, AppNavigationDirective, AppFooterDirective, ConnexionComponent ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }