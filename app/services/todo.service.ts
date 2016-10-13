import { Injectable } from '@angular/core';
import { TodoItem } from "../data.model";
import { TODO } from '../data';

@Injectable()

export class TodoService {

    getTodos(): Promise<TodoItem[]> {
        return Promise.resolve(TODO);
    }

    getTodo(id: number): Promise<TodoItem> {
        return this.getTodos().then(a => a.find(todo => todo.id === id));
    }

    createTodo(newTodo: TodoItem): Promise<TodoItem[]> {

        //erreur quand lenght = 0 donc on fait un if

        if (TODO.length > 0) {
            //ici on recupere le dernier id
            newTodo.id = TODO[TODO.length - 1].id + 1;
        } else {
            newTodo.id = 1;
        }

        TODO.push(newTodo);
        return Promise.resolve(TODO);
    }

    deleteTodo(id: number): Promise<TodoItem[]> {
        let test: boolean = true;
        let i: number = 0;

        // je parcours le tableau jusqua trouver l'id correspondant
        while (test && i < TODO.length) {
            if (TODO[i].id == id) {
                //je le delete
                TODO.splice(i, 1);
                test = false;
            }
            i++;
        }
        //et je renvoie le nouveau tableau
        return Promise.resolve(TODO);
    }
};