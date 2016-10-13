import { Component } from '@angular/core';
import { Login } from '../data.login';
import { Router } from '@angular/router';

@Component({
  selector: 'connexion-component',
  template: `
    <section>
      <p>Veuillez insérer votre login :</p>
      <input [(ngModel)]="login"/>
      <p>Veuillez insérer votre mot de passe :</p>
      <input [(ngModel)]="password"/>
      <br>
      <button (click)="testInput()">{{testButton}}</button>
    </section>
  `,
  styles: ['error {color: red; border: 1px red solid}']
})

export class ConnexionComponent {

    login: string = '';
    password: string = '';
    testButton: string = 'Se connecter';

    constructor(
        private router: Router
    ) {};

    ngOnInit() {
        this.resetInput();
    }

    testInput() {
        if (this.login == Login.login && this.password == Login.password)
            this.router.navigate(['/home']);
        else
        {
            this.displayError();
            this.resetInput();
        }
    }

    displayError() {
        this.testButton = 'Erreur';
        setTimeout(() => {
            this.testButton = 'Se connecter';
        }, 300);
    }

    resetInput() {
        this.login = '';
        this.password = '';
    }
}