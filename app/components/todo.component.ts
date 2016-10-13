import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../data.model';

@Component({
  selector: 'homepage-component',
  template: `  
    <section>
      <article *ngFor="let todo of todos">
        <!--On verifie ici que le todo n'est pas fait-->
        <div *ngIf="!todo.done">
          <p><u>Todo numéro {{todo.id}} :</u></p>
          <p><b>{{todo.title}}</b></p>
          <textarea style="width:100%;min-height:50px;"[(ngModel)]="todo.details"></textarea>
          <button (click)="todo.done = true">Effectuée</button>
          <hr>
        </div>
      </article>
    </section>
  `,
  providers: [ TodoService ]
})

export class ToDoComponent {
    todos: TodoItem[];

    constructor(
        private todoService: TodoService,

        private router: Router
    ){};

    getTodos() {
        this.todoService.getTodos()
            .then(a => this.todos = a);
    }

    ngOnInit() { 
        this.getTodos(); 
    }
}