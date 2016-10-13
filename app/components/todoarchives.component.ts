import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'homepage-component',
  template: `
    <section>
      <article>
      Page archives
      </article>
    </section>
  `
})

export class ToDoArchivesComponent {
}