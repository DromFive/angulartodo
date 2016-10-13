export class TodoItem {
    public id: number;
    public title: string;
    public details: string;
    public done: boolean;

    constructor(data: any){
        this.id = data.id;
        this.title = data.title;
        this.details = data.details;
        this.done = data.done;
    }
}