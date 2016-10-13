import {TodoItem} from "./data.model";

export const TODO: TodoItem[] = [
    new TodoItem({id: 1, title: '#US1', details: 'En tant qu’utilisateur je vois sur la page d’accueil la liste des tâches à réaliser', done: true}),
    new TodoItem({id: 2, title: '#US2', details: 'En tant qu’utilisateur je peux valider une tâche en cliquant sur le bouton « Effectuée » sur chaque tâche de la liste des tâches à réaliser, ce qui supprime la tâche de la liste des tâches à réaliser.', done: true}),
    new TodoItem({id: 3, title: '#US3', details: 'En tant qu’utilisateur je peux ajouter une tâche dans la liste depuis la page d’accueil.', done: true}),
    new TodoItem({id: 4, title: '#US4', details: 'En tant qu’utilisateur je visualise le menu de navigation sur toutes les pages.',  done: false}),
    new TodoItem({id: 5, title: '#US5', details: 'En tant qu’utilisateur je peux accéder aux pages « Tâche à faire » et « Archives » depuis la navigation.', done: false}),
    new TodoItem({id: 6, title: '#US6', details: 'En tant qu’utilisateur je peux voir la liste des tâches réalisées sur la page « Archives ».', done: false}),
    new TodoItem({id: 7, title: '#US7', details: 'En tant qu’utilisateur je peux supprimer définitivement une tâche de la liste de la page «  Archives », ce qui supprime la tâche de la liste des tâches effectuées.', done: false}),
    new TodoItem({id: 8, title: '#US8', details: 'En tant qu’utilisateur je vois dans le footer sur toutes les pages le nombre de tâche à réaliser et le nombre de tâches réalisées.', done: false}),
    new TodoItem({id: 9, title: '#US9', details: 'En tant qu’utilisateur et à chaque fois que j’actualise l’application, je dois renseigner mon identifiant et mon mot de passe (admin: root) avant d’afficher une page.', done: false}),
];