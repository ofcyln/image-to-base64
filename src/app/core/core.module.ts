import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

import { AlertModule } from './alert/alert.module';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [HeaderComponent, NotFoundComponent, FooterComponent],
    imports: [CommonModule, AlertModule, AppRoutingModule, BrowserAnimationsModule, DragDropModule],
    exports: [HeaderComponent, AlertModule, AppRoutingModule, FooterComponent, NotFoundComponent],
})
export class CoreModule {}
