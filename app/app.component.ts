import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
    selector: 'my-app',
    template: `
                <header>
                    <h1>{{title}}</h1>
                </header>
                <nav-directive></nav-directive>
                <router-outlet></router-outlet>`,
    providers: [TodoService]
})
export class AppComponent {
    title = 'TodoList';
}