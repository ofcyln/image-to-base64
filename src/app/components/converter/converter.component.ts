import { Component } from '@angular/core';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
    public droppedFiles: File[] = [];
    public uploadedFiles: File[] = [];
    public imgURL: any;
    public imageSrc: string | ArrayBuffer;

    constructor() {}

    onDropHandler(droppedFiles: Array<File>) {
        this.droppedFiles = [];
        this.uploadedFiles = [];

        let reader = new FileReader();

        this.droppedFiles.push(...droppedFiles);

        const droppedFile = droppedFiles[0];

        console.log('dropped file', droppedFile);

        reader.readAsDataURL(droppedFiles[0]);

        reader.onload = (event) => {
            this.imageSrc = reader.result;

            console.log('dropped reader onload result', this.imageSrc);
        };
    }

    onUploadByButton(uploadedFiles: FileList) {
        this.uploadedFiles = [];
        this.droppedFiles = [];

        let reader = new FileReader();

        const uploadedFile = uploadedFiles[0];

        this.uploadedFiles.push(uploadedFile);

        console.log('uploaded file', uploadedFile);

        reader.readAsDataURL(uploadedFiles[0]);

        reader.onload = (event) => {
            this.imgURL = reader.result;

            console.log('uploaded file reader onload result', this.imgURL);
        };
    }
}
