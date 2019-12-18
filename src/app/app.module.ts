import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxUploaderModule } from 'ngx-uploader';

import { ConverterComponent } from './components/converter/converter.component';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, ConverterComponent],
    imports: [
        BrowserModule,
        CoreModule,
        NgxUploaderModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
