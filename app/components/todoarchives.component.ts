import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../data.model';

@Component({
  selector: 'homepage-component',
  template: `
    <section>
      <article *ngFor="let todo of todos">
        <!--On verifie ici que le todo est fait-->
        <div *ngIf="todo.done">
          <p><u>Todo numéro {{todo.id}} :</u></p>
          <p><b>{{todo.title}}</b></p>
          <p>{{todo.details}}</p>
          <button (click)=delete(todo.id)>Supprimer</button>
          <hr>
        </div>
      </article>
    </section>
    <footer-directive *ngIf="todos" [todos]="todos"></footer-directive>
  `,
  providers: [ TodoService ]
})

export class ToDoArchivesComponent {
    todos: TodoItem[];

    constructor(
        private todoService: TodoService
    ){};

    getTodos() {
        this.todoService.getTodos()
            .then(a => this.todos = a);
    }

    delete(id: number) {
        this.todoService.deleteTodo(id).then(a => this.todos = a);
    }

    ngOnInit() {
        this.getTodos();
    }
}