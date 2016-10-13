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
};