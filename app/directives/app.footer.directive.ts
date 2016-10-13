import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../data.model';

@Component({
    selector: 'footer-directive',
    template: `
        <footer>
            <p>{{textToTodo}} {{countOfTodo}}</p>
            <p>{{textToDone}} {{countOfDone}}</p>
        </footer>
    `,
    providers: [ TodoService ]
})

export class AppFooterDirective implements OnInit {
    textToDone = 'Nombre de tâches réalisées :';
    textToTodo = 'Nombre de tâches à réaliser :';
    countOfDone: number;
    countOfTodo: number;

    @Input() todos: TodoItem[];

    getCounts() {
        let countOfDone = 0;
        let countOfTodo = 0;

        this.todos.forEach(
            todo => {
                if (todo.done)
                    countOfDone++;
                else
                    countOfTodo++;
            }
        )
        this.countOfDone = countOfDone;
        this.countOfTodo = countOfTodo;
    }

    ngOnInit() {

        this.getCounts();
    }
}