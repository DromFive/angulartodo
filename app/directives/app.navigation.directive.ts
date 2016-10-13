import { Component } from "@angular/core";

@Component({
    selector: 'nav-directive',
    template: `
        <nav>
            <a routerLink="/home">{{accueil}}</a> <a routerLink="/archives">{{archives}}</a>
        </nav>
    `
})

export class AppNavigationDirective {
    accueil = 'Accueil';
    archives = 'Archives';
}