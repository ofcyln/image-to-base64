import { Component, OnInit } from '@angular/core';
import { AlertService } from './core/alert/alert.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Image to Base64';

    constructor(public alertService: AlertService) {}

    ngOnInit(): void {
        setTimeout(() => this.alertService.error('asd'), 1000);
    }
}
