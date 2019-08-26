import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileDropModule } from 'ngx-file-drop';

import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { HeaderComponent } from './header/header.component';
import { AlertModule } from './alert/alert.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [HeaderComponent, NotFoundComponent, FooterComponent],
    imports: [CommonModule, AlertModule, AppRoutingModule, BrowserAnimationsModule, DragDropModule, NgxFileDropModule],
    exports: [HeaderComponent, AlertModule, AppRoutingModule, FooterComponent, NotFoundComponent, NgxFileDropModule],
})
export class CoreModule {}
