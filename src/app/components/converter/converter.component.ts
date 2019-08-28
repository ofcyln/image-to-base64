import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
    public droppedFiles: File[] = [];
    public uploadedFiles: File[] = [];
    public imgURL: any;
    public imageSrc: string | ArrayBuffer;
    public textAreaForm: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.textAreaForm = new FormGroup({
            droppedURI: new FormControl('Loading...'),
            uploadedURI: new FormControl('Loading...'),
            uploadedImgTagName: new FormControl('Loading...'),
            droppedImgTagName: new FormControl('Loading...'),
            uploadedBackgroundStyle: new FormControl('Loading...'),
            droppedBackgroundStyle: new FormControl('Loading...'),
        });
    }

    onDropHandler(droppedFiles: Array<File>) {
        this.droppedFiles = [];
        this.uploadedFiles = [];
        this.textAreaForm.controls['droppedURI'].setValue('Loading...');
        this.textAreaForm.controls['droppedImgTagName'].setValue('Loading...');
        this.textAreaForm.controls['droppedBackgroundStyle'].setValue('Loading...');

        let reader = new FileReader();

        this.droppedFiles.push(...droppedFiles);

        const droppedFile = droppedFiles[0];

        reader.readAsDataURL(droppedFile);

        reader.onload = (event) => {
            this.imageSrc = reader.result;

            this.textAreaForm.controls['droppedURI'].setValue(this.imageSrc);

            this.textAreaForm.controls['droppedImgTagName'].setValue(
                '<img alt="' + droppedFile.name + '" src="' + this.imageSrc + '"/>',
            );

            this.textAreaForm.controls['droppedBackgroundStyle'].setValue(
                'background-image: url("' + this.imageSrc + '");',
            );
        };
    }

    onUploadByButton(uploadedFiles: FileList) {
        this.uploadedFiles = [];
        this.droppedFiles = [];
        this.textAreaForm.controls['uploadedURI'].setValue('Loading...');
        this.textAreaForm.controls['uploadedImgTagName'].setValue('Loading...');
        this.textAreaForm.controls['uploadedBackgroundStyle'].setValue('Loading...');

        let reader = new FileReader();

        const uploadedFile = uploadedFiles[0];

        this.uploadedFiles.push(uploadedFile);

        reader.readAsDataURL(uploadedFile);

        reader.onload = (event) => {
            this.imgURL = reader.result;

            this.textAreaForm.controls['uploadedURI'].setValue(this.imgURL);

            this.textAreaForm.controls['uploadedImgTagName'].setValue(
                '<img alt="' + uploadedFile.name + '" src="' + this.imgURL + '"/>',
            );

            this.textAreaForm.controls['uploadedBackgroundStyle'].setValue(
                'background-image: url("' + this.imgURL + '");',
            );
        };
    }
}
