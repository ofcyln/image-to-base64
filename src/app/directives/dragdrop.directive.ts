import { Directive, Output, HostListener, EventEmitter, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDragDrop]',
})
export class DragDropDirective {
    @Output() dropHandler: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();
    @Input() preventBodyDrop = true;

    @HostBinding('class.drop-zone-active')
    active = false;

    @HostListener('drop', ['$event'])
    onDrop(event: DragEvent) {
        event.preventDefault();

        this.active = false;

        const { dataTransfer } = event;

        if (dataTransfer.items) {
            const files = [];

            for (let i = 0; i < dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (dataTransfer.items[i].kind === 'file') {
                    files.push(dataTransfer.items[i].getAsFile());
                }
            }

            dataTransfer.items.clear();

            this.dropHandler.emit(files);
        } else {
            const files = dataTransfer.files;

            dataTransfer.clearData();

            this.dropHandler.emit(Array.from(files));
        }
    }

    @HostListener('dragover', ['$event'])
    onDragOver(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();

        this.active = true;
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event: DragEvent) {
        this.active = false;
    }

    @HostListener('body:dragover', ['$event'])
    onBodyDragOver(event: DragEvent) {
        if (this.preventBodyDrop) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    @HostListener('body:drop', ['$event'])
    onBodyDrop(event: DragEvent) {
        if (this.preventBodyDrop) {
            event.preventDefault();
        }
    }
}
