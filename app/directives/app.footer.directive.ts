import { Component } from "@angular/core";

@Component({
    selector: 'footer-directive',
    template: `
        <footer>
            <p>Created by {{author}}</p>
        </footer>
    `
})

export class AppFooterDirective {
    author = 'Basile Beldame';
}