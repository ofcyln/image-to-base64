import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
    selectedFile: File;

    constructor() {}

    ngOnInit() {}

    onFileChanged(event: any) {
        this.selectedFile = event.target.files[0];

        console.log(this.selectedFile);
    }
}
